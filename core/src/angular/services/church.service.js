(function() {
    'use strict';
    angular
        .module('ccb.core')
        .factory('ChurchService', ChurchService);

    ChurchService.$inject = ['$http'];

    function ChurchService ($http) {

    	var baseUrl = 'church/'
        this.create = function(church) {
        	return $http.post(baseUrl, church);
        };

        this.update = function(church) {
        	return $http.put(baseUrl, church);
        };

        this.delete = function(id) {
        	var url = baseUrl + '{id}';
        	return $http.delete(url, id);
        };

        this.list = function() {
        	return $http.get(baseUrl);
        };

        return this;
    }
})();
