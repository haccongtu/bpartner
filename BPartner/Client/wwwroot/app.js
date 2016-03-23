firebaseUrl = 'https://bpartner.firebaseio.com/';

(function () {
    'use strict';

    var app = angular
         .module('app', [
             'lumx',
             'firebase',
             'ui.router',
             'Controllers',
             'Directives',
             'Services'
         ])
         .config(function ($locationProvider, $stateProvider) {

             $stateProvider
                 .state('unauthorize',
                 {
                     url: '/unauthorize',
                     views: {
                         'header': {
                             templateUrl: 'templates/header/unauthorize-header.html'
                         }
                     },
                     redirectTo: 'unauthorize.login'
                 })
                 .state('unauthorize.login',
                 {
                     url: '/login',
                     views: {
                         'main@': {
                             templateUrl: 'templates/authorize/login.html',
                             controller: 'loginCtrl'
                         }
                     }
                 })
                .state('unauthorize.register',
                 {
                     url: '/register',
                     views: {
                         'main@': {
                             templateUrl: 'templates/authorize/register.html',
                             controller: 'registerCtrl'
                         }
                     }
                 })
                .state('app',
                 {
                     url: '',
                     views: {
                         'header': {
                             templateUrl: 'templates/header/header.html'
                         }
                     },
                     redirectTo: 'app.home',
                     requireLogin: true,
                     resolve: {
                         user: function resolver(AuthorizeService) {
                             console.info("Lấy thông tin user.")
                             return AuthorizeService.getUser();
                         }
                     }
                 })
                 .state('app.home',
                 {
                     url: '/',
                     views: {
                         'main@': {
                             templateUrl: 'templates/home/home.html',
                             controller: 'homeCtrl'
                         }
                     }
                 });
         })
         .run(['$rootScope', '$state', 'LayoutService', function ($rootScope, $state, LayoutService) {
             $rootScope.$state = $state;
             $rootScope.LayoutService = LayoutService;

             $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                 if (toState.requireLogin === true) {
                     if (toState.user === undefined) {
                         event.preventDefault();
                         $state.go('unauthorize.login');
                     }
                 }
                 else if (toState.redirectTo) {
                     event.preventDefault();
                     $state.go(toState.redirectTo, toParams)
                 }
             });
         }]);

    angular.module('Controllers', []);
    angular.module('Directives', []);
    angular.module('Services', []);
})();