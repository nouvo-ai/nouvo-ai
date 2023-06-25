from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from accounts.models import Team

def home(request):
    return render(request, 'home/index.html')

@login_required
def settings(request):
    user = request.user
    team = Team.objects.filter(members=user).first()
    context = {
        'team': team
    }
    return render(request, 'home/settings.html', context)