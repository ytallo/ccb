module.exports = function (menuService, SecurityConstants) {

    menuService.addItem({
    	code : 'ccb.core.menu.entries',
    	title : 'CCB_MENU_ENTRIES',
    	cls : 'fa-plus-square',
    	children : [
    		{
	            code : 'ccb.core.menu.churches',
	            title : 'CCB_MENU_CHURCHES',
	            cls : 'fa-gavel',
	            sref : 'churches',
	            operation : SecurityConstants.CCB_SCREEN_CHURCH_READ
	        },
    		{
	            code : 'ccb.core.menu.servants',
	            title : 'CCB_MENU_SERVANTS',
	            cls : 'fa-users',
	            sref : 'servants',
	            operation : SecurityConstants.CCB_SCREEN_SERVANT_READ
	        }
    	]
    });

};