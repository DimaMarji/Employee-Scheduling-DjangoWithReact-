from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Employee
from base.serializers import EmployeeSerializer
from dateutil.parser import parse


@api_view(['GET'])
def getEmployees(request):
    employees = Employee.objects.all()
    serializer = EmployeeSerializer(employees, many=True)
    return Response(serializer.data)
# Create your views here.
