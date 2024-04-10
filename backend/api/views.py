from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Users
from .serializer import UserSerializer

class UserListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
