from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('Timeline/', views.timeline, name='timeline'),
    path('FavoriteQuotes/', views.favorite_quotes, name='favorite_quotes')
]