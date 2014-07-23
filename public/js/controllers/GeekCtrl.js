angular.module('GeekCtrl', [])

.controller('GeekCtrl', function($scope, Geek){

	var socket = io.connect('http://192.168.1.8:8080');
	socket.on('geek', function (data) {
	    $scope.geeks.push(data);
	    $scope.$apply();
    });

	Geek.get().success(function(data){
		$scope.geeks = data;
	});

	$scope.tagline = 'The square root of life is pi!';
});