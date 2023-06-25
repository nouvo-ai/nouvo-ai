from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
# Create your models here.

class CustomUser(AbstractUser):

    def __str__(self):
        return self.email

class Team(models.Model):
    team_name = models.CharField(max_length=100)
    members = models.ManyToManyField(CustomUser, related_name='members')
    managers = models.ManyToManyField(CustomUser, related_name='managers')
    type = models.IntegerField(choices=[(1, '온프레미스'), (2, '클라우드')])
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.team_name

CustomUser.team = models.ForeignKey(Team, on_delete=models.CASCADE, null=True, blank=True)