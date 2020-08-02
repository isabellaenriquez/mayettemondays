from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('my-story', views.story, name='my-story'),
    path('collections', views.collections, name='collections'),
    path('contact', views.contact, name='contact')
]