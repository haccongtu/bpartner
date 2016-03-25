(function () {
    'use strict';
    angular.module('Controllers')
    .controller('registerCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$scope', '$state', 'AuthorizeService'];

    function RegisterCtrl($scope, $state, AuthorizeService) {

        var user = { email: '', password: '', name: '', repeatedPassword: '' };
        var vm = { isWaiting: false, isError: false, error: '' };

        function register() {
            $scope.vm.isWaiting = true;
            AuthorizeService.register(user, function (result) {
                $scope.vm.isWaiting = false;
                if (result.success) {
                    $state.go('unauthorize.login');
                }
                else {
                    $scope.vm.error = result.error.message;
                    $scope.vm.isError = true;
                }
                $scope.$apply();
            });
        }

        $scope.register = register;
        $scope.user = user;
        $scope.vm = vm;
    }
})();