!function(e){"use strict";e.module("ccb.core",["saphyre"])}(angular),function(){"use strict";function e(e,r){var t=this;t.churches=[],t.immobileTypes=[{name:"Próprio",value:0},{name:"Alugado",value:1},{name:"Cedido",value:2}],t.list=function(){return r.list()}}angular.module("ccb.core").controller("ChurchDialogController",e),e.$inject=["$scope","ChurchService"]}(),function(){"use strict";function e(e,r){var t=this;t.churches=[],t.list=function(){return r.list()}}angular.module("ccb.core").controller("ChurchController",e),e.$inject=["$scope","ChurchService"]}(),function(){"use strict";function e(e){return this.create=function(e){return{}},this.update=function(e){return{}},this["delete"]=function(e){return{}},this.list=function(){return[]},this}angular.module("ccb.core").factory("ChurchService",e),e.$inject=["$http"]}(),function(){function e(e){e.state("churches",{url:"/churches",templateUrl:"views/church/church-list.html",controller:"ChurchController",controllerAs:"vm",data:{title:"CCB_SCREEN_CHURCH_TITLE_LIST",operation:"ccb.core.servant.operation.read"}}).state("churches.create",{url:"/create",templateUrl:"views/church/church-form.html",controller:"ChurchDialogController",controllerAs:"vm",data:{title:"CCB_SCREEN_CHURCH_TITLE_CREATE",operation:"ccb.core.servant.operation.insert"},resolve:{entity:[function(){return{}}]}}).state("churches.edit",{url:"/edit/:id",templateUrl:"views/church/church-edit.html",controller:"ChurchDialogController",controllerAs:"vm",data:{title:"CCB_SCREEN_CHURCH_TITLE_EDIT",operation:"ccb.core.servant.operation.update"},resolve:{entity:["$stateParams","ChurchService",function(e,r){return r.find({id:e.id})}]}})}angular.module("ccb.core").config(e),e.$inject=["$stateProvider"]}();
//# sourceMappingURL=ccb-core-1.0.0.js.map