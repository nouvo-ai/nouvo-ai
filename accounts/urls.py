from django.urls import path, include
from .views import *
from django.contrib.auth.views import PasswordResetView

app_name = 'accounts'

urlpatterns = [
    path('signup/', my_view, name='signup'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('password_reset/', PasswordResetView.as_view(), name='password_reset'),
]