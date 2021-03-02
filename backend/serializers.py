from rest_framework import serializers
from .models import *

class URLShortenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = URLShortenerModel
        fields = ['original_url', 'expiration_datetime', 'access_limit']