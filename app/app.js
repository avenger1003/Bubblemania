'use strict';



var app = angular.module('myApp', []);

function PeopleCtrl($scope, $http) {

    $scope.people = [];

    $scope.loadPeople = function() {
        var httpRequest = $http.get('data-list.json')
        	.success(function(data, status) {
            $scope.people = data;
            console.log(data)
        });

    };

$scope.loadPeople();
}


var app =  angular.module('myApp',[]);

function peopleCtrl($scope, $http){
	$scope.loadPeople=  function(){
		var http =  $http.get('data-list.json').success(data, status){
			$scope.people = data;
			
		}
	}
}