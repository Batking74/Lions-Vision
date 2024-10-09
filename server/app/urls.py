from django.views.generic import TemplateView
from django.urls import path, re_path
from django.contrib import admin
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('manifest.json', views.manifest, name='Manifest'),
    # path('sw.js', views.service_worker, name='service_worker'),
    re_path(r"^.*$", TemplateView.as_view(template_name="index.html"))
]