from django.urls import path
from . import views

app_name = 'automatedemailsenderapp'
urlpatterns = [
    path('', views.index, name='index'),
]