from django.urls import path
from .views import *

app_name = "backend"

urlpatterns = [
    path('<str:unique_url_id>/',
        redirect_to_original_url,
        name='redirect_to_original_url'
    ),
    path('api/urlshortener/',
        create_unique_url,
        name='create_unique_url'
    )
]