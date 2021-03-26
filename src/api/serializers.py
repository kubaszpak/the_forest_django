from .models import Map
from rest_framework import serializers


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = '__all__'


class CreateMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = ('host',)
