'use strict';

angular.module('yookoreApp').factory('authInterceptor', function (authToken) {

    return {
      request: function(config) {
        var token = authToken.getToken();

        if(token)
           config.headers.Authorization = 'Bearer' + token;
         
        return config;

      },
      reponse: function(response) {
        return response;

      }

    };
  });
