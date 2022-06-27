import json
from django.shortcuts import render


def index(request, *args, **kwargs):
    if request.method == "POST":
        data = json.loads(request.POST)
        print(data)
    return render(request, 'backend/index.html')

def about(request):
    return render(request, 'backend/about.html')

def message(request):
    return render(request, 'backend/message.html')

def donate(request):
    return render(request, 'backend/donate.html')

def contact(request):
    return render(request, 'backend/contact.html')

def chatroom(request):
    return render(request, 'backend/chatroom.html')