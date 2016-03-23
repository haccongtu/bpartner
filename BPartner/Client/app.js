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
                 .state('app',
                 {
                     url: '',
                     views:
                     {
                         'header':
                         {
                             templateUrl: 'templates/header/header.html'
                         }
                     },
                     redirectTo: 'app.home'
                 })
                 .state('app.home',
                 {
                     url: '/',
                     views:
                     {
                         'main@':
                         {
                             templateUrl: 'templates/home/home.html',
                             controller: 'homeCtrl'
                         }
                     }
                 })
                 .state('app.authorize',
                 {
                     url: '/authorize',
                     redirectTo: 'app.authorize.login'
                 })
                 .state('app.authorize.login',
                 {
                     url: '/login',
                     views:
                     {
                         'main@':
                         {
                             templateUrl: 'templates/authorize/login.html',
                             controller: 'loginCtrl'
                         }
                     }
                 })
                 .state('app.authorize.register',
                 {
                     url: '/register',
                     views:
                     {
                         'main@':
                         {
                             templateUrl: 'templates/authorize/register.html',
                             controller: 'registerCtrl'
                         }
                     }
                 });
         })
         .run(['$rootScope', '$state', 'LayoutService', function ($rootScope, $state, LayoutService) {
             $rootScope.$state = $state;
             $rootScope.LayoutService = LayoutService;

             $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                 if (toState.redirectTo) {
                     event.preventDefault();
                     $state.go(toState.redirectTo, toParams)
                 }
             });
         }]);

    angular.module('Controllers', []);
    angular.module('Directives', []);
    angular.module('Services', []);
})();