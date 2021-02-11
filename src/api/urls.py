from django.urls import path
from .views import MapListView

urlpatterns = [
    path('', MapListView.as_view())
]
