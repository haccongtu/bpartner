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
                     redirectTo: 'app.home'
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
                 })
                .state('app.profile',
                 {
                     url: '/',
                     views: {
                         'main@': {
                             templateUrl: 'templates/profile/profile.html'
                         }
                     }
                 })
                .state('app.friends',
                {
                    url: '/',
                    views: {
                        'main@': {
                            templateUrl: 'templates/friends/friends.html'
                        }
                    }
                })
                .state('app.news',
                {
                    url: '/',
                    views: {
                        'main@': {
                            templateUrl: 'templates/news/news.html'
                        }
                    }
                })
                .state('app.settings',
                {
                    url: '/',
                    views: {
                        'main@': {
                            templateUrl: 'templates/settings/settings.html'
                        }
                    }
                });

         })
         .run(['$rootScope', '$state', 'LayoutService', function ($rootScope, $state, LayoutService) {
             $rootScope.$state = $state;
             $rootScope.LayoutService = LayoutService;
         }]);
    angular.module('Controllers', []);
    angular.module('Directives', []);
    angular.module('Services', []);
})();