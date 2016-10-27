var PetStoreApp;
(function (PetStoreApp) {
    angular.module("PetStoreApp", ["ui.router"]).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state("master", {
            url: "/",
            templateUrl: "ngApp/views/master.html",
            controller: PetStoreApp.Controllers.MasterController,
            controllerAs: "c"
        })
            .state("details", {
            url: "/details/:id/:type",
            templateUrl: "ngApp/views/details.html",
            controller: PetStoreApp.Controllers.DetailsController,
            controllerAs: "c"
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(PetStoreApp || (PetStoreApp = {}));
