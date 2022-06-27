from django.contrib import admin
from .models import (
    Member, 
    Event,
    AudioMessage,
    VideoMessage,
    ChatMessage
)

admin.site.register(Member)
admin.site.register(Event)
admin.site.register(AudioMessage)
admin.site.register(VideoMessage)
admin.site.register(ChatMessage)