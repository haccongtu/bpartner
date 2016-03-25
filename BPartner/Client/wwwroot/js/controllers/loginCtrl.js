(function () {
    'use strict';
    angular.module('Controllers')
    .controller('loginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', 'AuthorizeService'];

    function LoginCtrl($scope, $state, AuthorizeService) {
        var user = { email: '', password: '' };
        var vm = { isWaiting: false, isError: false, error: '' };

        $scope.user = user;
        $scope.vm = vm;

        $scope.login = login;

        function login() {
            $scope.vm.isWaiting = true;
            AuthorizeService.login(user, function (result) {
                $scope.vm.isWaiting = false;
                if (result.success == true) {
                    $state.go('app.home');
                }
                else {
                    $scope.isError = true;
                    $scope.error = result.error.message;
                }
                $scope.$apply();
            });
        }
    };
})();