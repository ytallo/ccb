module.exports = function (SecurityConstants, securityService, OperationType) {

    SecurityConstants.SPH_SCREEN_SERVANT_READ   = 'ccb.core.servant.operation.read';
    SecurityConstants.SPH_SCREEN_SERVANT_INSERT = 'ccb.core.servant.operation.insert';
    SecurityConstants.SPH_SCREEN_SERVANT_UPDATE = 'ccb.core.servant.operation.update';
    SecurityConstants.SPH_SCREEN_SERVANT_DELETE = 'ccb.core.servant.operation.delete';

    SecurityConstants.SPH_SCREEN_CHURCH_READ   = 'ccb.core.church.operation.read';
    SecurityConstants.SPH_SCREEN_CHURCH_INSERT = 'ccb.core.church.operation.insert';
    SecurityConstants.SPH_SCREEN_CHURCH_UPDATE = 'ccb.core.church.operation.update';
    SecurityConstants.SPH_SCREEN_CHURCH_DELETE = 'ccb.core.church.operation.delete';

const servant = {
        code : 'ccb.core.servant.node',
        name : 'CCB_MENU_SERVANTS',
        operations : [
            {
                code : SecurityConstants.SPH_SCREEN_SERVANT_READ,
                name : 'SPH_OPERATION_READ',
                type : OperationType.READ
            },
            {
                code : SecurityConstants.SPH_SCREEN_SERVANT_INSERT,
                name : 'SPH_OPERATION_WRITE',
                type : OperationType.INSERT
            },
            {
                code : SecurityConstants.SPH_SCREEN_SERVANT_UPDATE,
                name : 'SPH_OPERATION_CHANGE',
                type : OperationType.UPDATE
            },
            {
                code : SecurityConstants.SPH_SCREEN_SERVANT_DELETE,
                name : 'SPH_OPERATION_REMOVE',
                type : OperationType.DELETE
            }
        ]
    };

const church = {
        code : 'ccb.core.church.node',
        name : 'CCB_MENU_CHURCHES',
        operations : [
            {
                code : SecurityConstants.SPH_SCREEN_CHURCH_READ,
                name : 'SPH_OPERATION_READ',
                type : OperationType.READ
            },
            {
                code : SecurityConstants.SPH_SCREEN_CHURCH_INSERT,
                name : 'SPH_OPERATION_WRITE',
                type : OperationType.INSERT
            },
            {
                code : SecurityConstants.SPH_SCREEN_CHURCH_UPDATE,
                name : 'SPH_OPERATION_CHANGE',
                type : OperationType.UPDATE
            },
            {
                code : SecurityConstants.SPH_SCREEN_CHURCH_DELETE,
                name : 'SPH_OPERATION_REMOVE',
                type : OperationType.DELETE
            }
        ]                
    }

    securityService.addNode({
        code : 'ccb.entries.node',
        name : 'CCB_MENU_ENTRIES',
        childNodes : [servant, church]
        
    });



};