from django.shortcuts import render
from rest_framework import generics, status
from .serializers import MapSerializer, CreateMapSerializer
from .models import Map
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.


class MapListView(generics.ListAPIView):
    queryset = Map.objects.all()
    serializer_class = MapSerializer


class CreateMapView(APIView):
    serializer_class = CreateMapSerializer

    def post(self, request, format = None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        host = self.request.session.session_key
        queryset = Map.objects.filter(host=host)
        if queryset.exists():
            room = queryset[0]
            return Response(CreateMapSerializer(room).data, status=status.HTTP_200_OK)

        room = Map(host = host)
        room.save()

        return Response(CreateMapSerializer(room).data, status=status.HTTP_201_CREATED)

class UserInRoomView(APIView):
    serializer_class = CreateMapSerializer

    def get(self, request, format = None):
        try:
            host = self.request.session.session_key
            queryset = Map.objects.filter(host = host)
            if queryset.exists():
                room = queryset[0]
                return Response(CreateMapSerializer(room).data, status=status.HTTP_200_OK)
                # data = {
                #     'host': self.request.session.session_key
                # }
                # return JsonResponse(data, status=status.HTTP_200_OK)
            else:
                return Response({'Room not found' : 'Host has no rooms'}, status = status.HTTP_404_NOT_FOUND)
        except:
            return Response({'Bad request' : 'Invalid data'}, status = status.HTTP_400_BAD_REQUEST)



    


