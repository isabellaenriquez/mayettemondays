from django.shortcuts import render
from django.http import HttpResponse

# home page
def index(request):
    return render(request, 'mmsite/index.html')

# my story
def story(request):
    return render(request, 'mmsite/my-story.html', context={
        'page_title': 'My Story'
    })

# view collections
def collections(request):
    return render(request, 'mmsite/collections.html', context={
        'page_title': 'Collections'
    })

# contact info
def contact(request):
    return render(request, 'mmsite/contact.html', context={
        'page_title': 'Contact'
    })