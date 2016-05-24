(function () {

    angular
        .module('ccb.core')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('churches', {
                url : '/churches',
                templateUrl : 'views/church/church-list.html',
                controller: 'ChurchController',
                controllerAs: 'vm',
                data : { 
                    title: 'CCB_SCREEN_CHURCH_TITLE_LIST', 
                    operation : 'ccb.core.servant.operation.read' 
                }
            })
            .state('churches.create', {
                url : '/create',
                templateUrl : 'views/church/church-form.html',
                controller: 'ChurchDialogController',
                controllerAs: 'vm',
                data : { 
                    title: 'CCB_SCREEN_CHURCH_TITLE_CREATE', 
                    operation : 'ccb.core.servant.operation.insert' 
                },
                resolve: {
                    entity: [function() {
                        return {};
                    }]
                }
            })
            .state('churches.edit', {
                url : '/edit/:id',
                templateUrl : 'views/church/church-edit.html',
                controller: 'ChurchDialogController',
                controllerAs: 'vm',
                data : { 
                    title: 'CCB_SCREEN_CHURCH_TITLE_EDIT', 
                    operation : 'ccb.core.servant.operation.update' 
                },
                resolve: {
                    entity: ['$stateParams', 'ChurchService', function($stateParams, ChurchService) {
                        return ChurchService.find({id : $stateParams.id});
                    }]
                }
            });
    };

}());