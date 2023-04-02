from django.shortcuts import render

# Create your views here.

from .apps import TourismbotConfig 

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from chatbot.chat import get_response


class call_model(APIView):

    # def get(self,request):
    #     if request.method == 'GET':
            
    #         # sentence is the query we want to get the prediction for
    #         params =  request.GET.get('sentence')
            
    #         # predict method used to get the prediction
    #         response = get_response(request.GET.get('sentence'))
            
    #         # returning JSON response
    #         return JsonResponse(response,safe=False)

    def post(self, request):
        if request.method == 'POST':
            
            data = request.data
            
            que = data['sentence']
            
            predicted = get_response(que)
            response_dict = {"ans": predicted}
            return JsonResponse(response_dict, safe=False)