from django.db import models
# from django.contrib.postgres.fields import ArrayField

# Create your models here.


def list_default():
    return [0, 0, 0, 0, 0, 0, 0, 0, 0]


class Map(models.Model):
    host = models.CharField(max_length=50, unique=True)
    logged_in_with_spotify = models.BooleanField(default=False, null=False)
    list_of_buildings = models.JSONField(default=list)
