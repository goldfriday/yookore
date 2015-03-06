'use strict';


angular.module('yookoreApp').controller('StatusupdateCtrl', function ($scope, statusUpdate) {
   //  $scope.submit = function() {

      
   //      // var $scope.authorid = "Paul Imisi";
   //       var location = "Randburg";
        
   //      var statusupdate = {
   //          content: $scope.content,
   //          authorid: $scope.authorid,
   //          location: $scope.location

   //      };

   //    $http.post(API_URL_2 + '/statusupdate/',statusupdate)
   //  	.success(function  (res) {
   //  		alert('success', 'Status updated !');

   //  	})
   //  	.error(function  (err) {
   //  		alert('warning', 'Opp!', 'Status not updated');
   //  	})
   //  };
   //    $http.get(API_URL_2 + '/statusupdate/').success(function(statusupdate){
  	// 	$scope.statusupdate = statusupdate;

  	// }).error(function(err){
  	// 	alert('warning',"Unable to get status", err.message);
  	// })

    $scope.statusupdate = statusUpdate.query();

});

