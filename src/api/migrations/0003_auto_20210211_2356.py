# Generated by Django 3.1.2 on 2021-02-11 22:56

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_map_host'),
    ]

    operations = [
        migrations.AlterField(
            model_name='map',
            name='list_of_buildings',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=9),
        ),
    ]
