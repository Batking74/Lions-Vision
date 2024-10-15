from django.http import HttpResponse
from pathlib import Path

BASE_DIR = str(Path(__file__).resolve().parent.parent.parent / 'client/public/').replace('\\', '/')

def service_worker(request):
    with open(BASE_DIR + '/sw.js', 'r') as file:
        response = HttpResponse(file.read(), content_type='application/javascript')
        return response


def manifest(request):
    with open(BASE_DIR + '/manifest.json', 'r') as file:
        response = HttpResponse(file.read(), content_type='application/json')
        return response