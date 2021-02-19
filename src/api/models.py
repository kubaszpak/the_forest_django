from django.db import models

# Create your models here.

def default_list():
    return list([0,0,0,0,0,0,0,0,0])


class Map(models.Model):
    host = models.CharField(max_length=50, unique=True)
    logged_in_with_spotify = models.BooleanField(default=False)
    list_of_buildings = models.JSONField(default = default_list)


