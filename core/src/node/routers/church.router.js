var sanitizeHtml = require('sanitize-html');

module.exports = function churchController(Controller, churchService, SecurityContants) {

	var controller = new Controller('/church');

	controller.listOperation = SecurityContants.SPH_SCREEN_CHURCH_READ;
	controller.createOperation = SecurityContants.SPH_SCREEN_CHURCH_INSERT;
	controller.updateOperation = SecurityContants.SPH_SCREEN_CHURCH_UPDATE;
	controller.deleteOperation = SecurityContants.SPH_SCREEN_CHURCH_DELETE;

	controller.list = function() {
		return churchService.list();
	};

	controller.create = function(req) {

	};

	controller.load();

	return controller;
}