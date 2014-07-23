angular.module('GeekService', [])

.factory('Geek', ['$http', function($http){

	return {

		get: function(){
			return $http.get('http://192.168.1.8:8080/api/geeks');
		},

		create : function(geekData){
			return $http.post('http://192.168.1.8:8080/api/geeks', geekData);
		},

		// call to DELETE a geek
		delete : function(id) {
			return $http.delete('http://192.168.1.8:8080/api/geeks/' + id);
		}

	}

}]);