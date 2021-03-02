# Generated by Django 3.1.7 on 2021-02-28 19:40

import backend.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StatisticsModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('ip_address', models.GenericIPAddressField(editable=False)),
                ('http_referer', models.URLField(blank=True, editable=False, null=True)),
            ],
            options={
                'verbose_name': 'unique url statistic',
                'db_table': 'short_url_statistics',
            },
        ),
        migrations.CreateModel(
            name='URLShortenerModel',
            fields=[
                ('unique_url_id', models.CharField(default=backend.models.URLShortenerModel.create_unique_url_id, editable=False, max_length=8, primary_key=True, serialize=False)),
                ('expiration_datetime', models.DateTimeField(default=backend.models.URLShortenerModel.generate_expiration_datetime)),
                ('original_url', models.URLField(validators=[django.core.validators.URLValidator(schemes=['http', 'https'])])),
                ('access_limit', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('access_counter', models.PositiveSmallIntegerField(default=0, editable=False)),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'unique url',
                'db_table': 'short_urls',
            },
        ),
        migrations.AddIndex(
            model_name='urlshortenermodel',
            index=models.Index(fields=['unique_url_id'], name='short_urls_unique__c8a1a1_idx'),
        ),
        migrations.AddField(
            model_name='statisticsmodel',
            name='unique_url',
            field=models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, to='backend.urlshortenermodel'),
        ),
        migrations.AddIndex(
            model_name='statisticsmodel',
            index=models.Index(fields=['unique_url'], name='short_url_s_unique__06a083_idx'),
        ),
    ]