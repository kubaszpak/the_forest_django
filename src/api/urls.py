from django.urls import path
from .views import MapListView, CreateMapView, UserInRoomView

urlpatterns = [
    path('', MapListView.as_view()),
    path('create-room', CreateMapView.as_view()),
    path('user-in-room', UserInRoomView.as_view()),
]

