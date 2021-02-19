from django.shortcuts import render
from rest_framework import generics
from .serializers import MapSerializer
from .models import Map

# Create your views here.


class MapListView(generics.ListAPIView):
    queryset = Map.objects.all()
    serializer_class = MapSerializer

    
