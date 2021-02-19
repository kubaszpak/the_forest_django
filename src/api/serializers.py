from .models import Map
from rest_framework import serializers


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = '__all__'
