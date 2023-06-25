from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser, Team
# Register your models here.

class CustomUserAdmin(UserAdmin):
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm
    model = CustomUser
    list_display = ['username', 'email', 'is_active', 'is_staff', 'is_superuser']
    add_fieldsets = (
        (None, {
            'fields': ('username', 'email', 'password1', 'password2'),
        }),
    )

class TeamAdmin(admin.ModelAdmin):
    list_display = ('team_name', 'display_managers', 'display_members', 'type', 'is_active')

    def display_members(self, obj):
        return ', '.join([str(member) for member in obj.members.all()])
    display_members.short_description = 'Members'

    def display_managers(self, obj):
        return ', '.join([str(manager) for manager in obj.managers.all()])
    display_managers.short_description = 'Managers'

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Team, TeamAdmin)
admin.site.unregister(Group)