# Generated by Django 4.2.2 on 2023-06-25 06:21

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0002_remove_customuser_bio_remove_customuser_nickname"),
    ]

    operations = [
        migrations.CreateModel(
            name="Team",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("team_name", models.CharField(max_length=100)),
                ("type", models.IntegerField(choices=[(1, "온프레미스"), (2, "클라우드")])),
                ("is_active", models.BooleanField(default=True)),
                (
                    "managers",
                    models.ManyToManyField(
                        related_name="managers", to=settings.AUTH_USER_MODEL
                    ),
                ),
                (
                    "members",
                    models.ManyToManyField(
                        related_name="members", to=settings.AUTH_USER_MODEL
                    ),
                ),
            ],
        ),
    ]