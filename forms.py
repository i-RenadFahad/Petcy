from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class UserRegisteration(UserCreationForm):

    email = forms.EmailField(widget=forms.TextInput(attrs={'placeholder': 'Email Address'}))
    password1 = forms.CharField(max_length=16, widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}))
    password2 = forms.CharField(max_length=16, widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm Password'}))
    #gender = forms.CharField(max_length=1, required=True, widget=forms.TextInput(attrs={'placeholder': 'Enter your gender F for female M for male'}))
    
    

    class Meta:

        model = User

        widgets = {
            'username' : forms.TextInput(attrs = {'placeholder': 'Username'}),
        }

        fields = ('email', 'username', 'password1', 'password2')









        