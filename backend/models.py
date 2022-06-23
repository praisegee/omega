from turtle import title
from django.db import models

class Member(models.Model):
    fullname = models.CharField(max_length=255)
    date_of_birth = models.DateField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    address = models.CharField(max_length=500, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return str(self.fullname).title()
    
class Event(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    time = models.TimeField(blank=True, null=True)
    design = models.ImageField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return str(self.title).title()
    
class AudioMessage(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField(blank=True, null=True)
    file = models.FileField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return str(self.title).title()
    
class VideoMessage(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField(blank=True, null=True)
    file = models.FileField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return str(self.title).title()
    
    
    
