from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def timeline(request):
    return render(request, 'timeline.html')

def favorite_quotes(request):
    return render(request, 'fav_quotes.html')