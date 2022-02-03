from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Employee
        fields = ['_id', 'name', 'email','phoneNumber','jobTitle']

    def get__id(self, obj):
        return obj._id

    def get_name(self, obj):
        name = obj.name
        return name


