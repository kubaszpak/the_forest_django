from .models import Map
from rest_framework import serializers


class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = ('id', 'host', 'logged_in_with_spotify', 'list_of_buildings')
