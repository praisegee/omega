from django import views
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('about/', views.about, name="about"),
    path('message/', views.message, name="message"),
    path('donate/', views.donate, name="donate"),
    path('contact/', views.contact, name="contact"),
    path('chatroom/', views.chatroom, name="chatroom"),
]
