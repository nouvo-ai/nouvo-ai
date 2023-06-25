from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import CustomUserCreationForm
from django.contrib.auth.models import AnonymousUser
from allauth.account.views import LoginView
from allauth.account.forms import LoginForm
from .models import Team, CustomUser
# from django.http import HttpResponseRedirect

def my_view(request):
    login_url = '/accounts/login/'
    form = CustomUserCreationForm()
    context = {'login_url': login_url, 'form': form}
    return render(request, 'account/signup.html', context)

class CustomLoginView(LoginView):
    form_class = LoginForm
    template_name = 'account/login.html'

    def form_valid(self, form):
        # print('is valid')
        response = super().form_valid(form)
        user = self.request.user
        team = Team.objects.filter(members=user).first()
        if not team.is_active:
            return self.form_invalid(form)  # form_invalid() 메서드 호출
        # return HttpResponseRedirect(self.get_success_url())
        return redirect('home')

    def form_invalid(self, form):
        try:
            email = form.cleaned_data.get('login')  # 유저명 필드에서 값을 추출
            # print(email)
            user = CustomUser.objects.get(email=email)  # 유저명을 기준으로 유저 조회
            team = Team.objects.filter(members=user).first()
            if not team.is_active:
                self.logout()  # 로그아웃 수행
                messages.error(self.request, 'Team is not active.')
        except Exception as e:
            # print(e)
            pass
        return self.render_to_response(self.get_context_data(form=form))
    
    def logout(self):
        self.request.session.flush()  # 세션 비우기
        self.request.user = AnonymousUser()  # 사용자를 AnonymousUser로 설정

