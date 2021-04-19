from django.shortcuts import render
from rest_framework import generics, status
from .serializers import MapSerializer, CreateMapSerializer, GetMapSerializer
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

class GetRoomView(APIView):
    serializer_class = GetMapSerializer
    lookup = 'code'
    
    def get(self, request, format=None):
        host = request.GET.get(self.lookup)
        if host != None:
            queryset = Map.objects.filter(host=host)
            if (queryset.exists()):
                data = GetMapSerializer(queryset[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid Room Code.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

    # def get(self, request, format = None):
    #     try:
    #         host = self.request.session.session_key
    #         queryset = Map.objects.filter(host = host)
    #         if queryset.exists():
    #             room = queryset[0]
    #             return Response(CreateMapSerializer(room).data, status=status.HTTP_200_OK)

    #         else:
    #             return Response({'Room not found' : 'Host has no rooms'}, status = status.HTTP_404_NOT_FOUND)
    #     except:
    #         return Response({'Bad request' : 'Invalid data'}, status = status.HTTP_400_BAD_REQUEST)

class UserInRoomView(APIView):
    def get(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        data = {
            'host': self.request.session.get('host')
        }
        return JsonResponse(data, status=status.HTTP_200_OK)




    


