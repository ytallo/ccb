(function () {

    angular
        .module('ccb.core')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('churches', {
                url : '/churches',
                templateUrl : 'views/churches/list.html',
                data : { title: 'CCB_SCREEN_CHURCHES_TITLE_LIST', operation : 'ccb.core.servant.operation.read' }
            })
            .state('churches.create', {
                url : '/create',
                templateUrl : 'views/churches/create.html',
                data : { title: 'SPH_SCREEN_CHURCHES_TITLE_CREATE', operation : 'ccb.core.servant.operation.insert' }
            })
            .state('churches.edit', {
                url : '/edit/:id',
                templateUrl : 'views/churches/edit.html',
                data : { title: 'SPH_SCREEN_CHURCHES_TITLE_EDIT', operation : 'ccb.core.servant.operation.update' }
            });
    };

}());