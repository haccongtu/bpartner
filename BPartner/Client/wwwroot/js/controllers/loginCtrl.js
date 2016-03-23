(function () {
    'use strict';
    angular.module('Controllers')
    .controller('loginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', 'AuthorizeService'];

    function LoginCtrl($scope, AuthorizeService) {
        var user = { email: '', password: '' };
        $scope.user = user;

        $scope.login = login;

        function login(email, password) {
            AuthorizeService.login(email, password);
        }
    };
})();