(function() {
	'use strict';

	angular
		.module('ccb.core')
		.controller('ChurchController', ChurchController);

	ChurchController.$inject = ['$scope', 'ChurchService'];

	function ChurchController($scope, ChurchService) {
		var vm = this;

		vm.churches = [];

		vm.list = function() {
			ChurchService.list().then(function(data) {
				vm.churches = data;
			})
		}
	}
})();