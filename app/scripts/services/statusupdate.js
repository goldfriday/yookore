'use strict';


angular.module('yookoreApp').factory('statusUpdate',[ '$resource','API_URL_2', function ($resource, API_URL_2) {

   return $resource(API_URL_2 + '/api/status_updates/post/username/:id',null, {
    'update': {method:'PUT'}
   });
  }]);
