from django.db import models

# Create your models here.
class Users(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.CharField(max_length=15)   
    blood_group = models.CharField(max_length=15)
    lst_dnt_date = models.CharField(max_length=15)
    contact_number = models.CharField(max_length=15)
    st_address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    province = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name