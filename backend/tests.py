# Create your tests here.
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from .models import *


class URLShortenerTest(APITestCase):
    def test_unique_url(self):
        url = reverse('backend:create_unique_url')
        data = {"original_url": "http://www.stord.com"}

        # Create the unique url
        response = self.client.post(url, data, format='json')
        unique_url_id = response.json()['id']

        unique_url_obj = URLShortenerModel.objects.get(pk=unique_url_id)

        # Testing generating long URL to short URL
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(unique_url_obj.unique_url_id, unique_url_id)

        redirect_response = self.client.get(
            reverse('backend:redirect_to_original_url', kwargs={
                'unique_url_id': unique_url_obj.unique_url_id
            })
        )

        # Testing the new url if it redirects to the original url
        self.assertEqual(redirect_response.status_code, status.HTTP_302_FOUND)
        self.assertEqual(redirect_response.url, unique_url_obj.original_url)

