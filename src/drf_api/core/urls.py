from django.urls import path
from .views import * 

app_name = 'core' 

urlpatterns = [
    path('user-id/', UserProfileView.as_view(), name='user'),
    path('', ItemListView.as_view(), name='product-list'),  
]
