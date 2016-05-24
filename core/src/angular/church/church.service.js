(function() {
    'use strict';
    angular
        .module('ccb.core')
        .factory('ChurchService', ChurchService);

    ChurchService.$inject = ['$http'];

    function ChurchService ($http) {

        var baseUrl = 'church/'
        this.create = function(church) {
            return {};
        };

        this.update = function(church) {
            return {};
        };

        this.delete = function(id) {
            return {};
        };

        this.list = function() {
            return [];
        };

        return this;
    }
})();
