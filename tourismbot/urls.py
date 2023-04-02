

from django.contrib import admin
from django.urls import path,include
from .views import call_model

urlpatterns = [
    path('botmodel/',call_model.as_view())
]
