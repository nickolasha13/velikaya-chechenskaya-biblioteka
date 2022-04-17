from django.shortcuts import render
from .models import *

def index(request):
    data = Version.objects.filter(is_going=True)
    context = {
        'title': 'Главная страница',
        'version': data[0]
    }
    print(context)
    return render(request, 'main/index.html', context=context)
