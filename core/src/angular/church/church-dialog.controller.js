(function() {
	'use strict';

	angular
		.module('ccb.core')
		.controller('ChurchDialogController', ChurchDialogController);

	ChurchDialogController.$inject = ['$scope', 'ChurchService', 'entity'];

	function ChurchDialogController($scope, ChurchService, entity) {
		var vm = this;

		vm.immobileTypes = [
            { name : 'Próprio', value : 0 },
            { name : 'Alugado', value : 1 },
            { name : 'Cedido', value : 2 }
        ];
	}
})();