from django.core.validators import URLValidator
from django.db import models
from django.urls import reverse
from django.utils import timezone
from datetime import timedelta
import string
import random

schema_validate = URLValidator(schemes=["http", "https"])


class URLShortenerModel(models.Model):

    def generate_expiration_datetime():
        return timezone.now() + timedelta(days=360)

    def create_unique_url_id():
        letters = list(string.ascii_letters)
        digits = [x for x in range(10)]
        values = letters + digits

        # 62^8 values
        id_ = "".join([str(random.choice(values)) for _ in range(8)])

        return id_

    unique_url_id = models.CharField(
        primary_key=True,
        max_length=8,
        default=create_unique_url_id,
        editable=False
    )
    expiration_datetime = models.DateTimeField(
        default=generate_expiration_datetime
    )
    original_url = models.URLField(max_length=500, validators=[schema_validate])
    access_limit = models.PositiveSmallIntegerField(null=True, blank=True)
    access_counter = models.PositiveSmallIntegerField(default=0, editable=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.full_clean()
        return super().save(*args, **kwargs)

    def created_at_formated(self):
        return self.created_at.strftime("%Y-%m-%d %H:%M:%S")

    def get_absolute_url(self):
        return reverse(
            'backend:redirect_to_original_url',
            kwargs={'unique_url_id': self.unique_url_id}
        )

    def __str__(self):
        return str(self.unique_url_id)

    class Meta:
        db_table = 'short_urls'
        verbose_name = 'unique url'
        indexes = [models.Index(fields=['unique_url_id']), ]


class StatisticsModel(models.Model):
    unique_url = models.ForeignKey(
        URLShortenerModel,
        on_delete=models.CASCADE,
        editable=False
    )
    time = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(editable=False)
    http_referer = models.URLField(editable=False, null=True, blank=True)

    def time_formatted(self):
        return self.time.strftime("%Y-%m-%d %H:%M:%S")

    def __str__(self):
        return str(self.unique_url)

    class Meta:
        db_table = 'short_url_statistics'
        verbose_name = 'unique url statistic'
        indexes = [models.Index(fields=['unique_url']), ]
