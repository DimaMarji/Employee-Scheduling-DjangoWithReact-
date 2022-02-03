from django.db import models

class Employee(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=False)
    email=models.EmailField( max_length=254)
    phoneNumber=models.CharField(max_length=200, null=False)
    jobTitle=models.CharField(max_length=200, null=False)

    def __str__(self):
        return self.name

class Job(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=False)
    start=models.DateTimeField(auto_now_add=False)
    end=models.DateTimeField(auto_now_add=False)
    def __str__(self):
        return self.name

