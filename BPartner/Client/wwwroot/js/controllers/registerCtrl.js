(function () {
    'use strict';
    angular.module('Controllers')
    .controller('registerCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$scope'];

    function RegisterCtrl($scope) {
        $scope.emailValidation = emailValidation;
        $scope.passwordValidation = passwordValidation;
        $scope.register = register;

        $scope.vm = {};

        function emailValidation(email) {
            return /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/.test(email);
        }

        function passwordValidation(password) {
            return password != undefined && password.length > 0;
        }

        function register() {
            var ref = new Firebase(firebaseUrl);
            ref.createUser({
                email: $scope.vm.email,
                password: $scope.vm.password
            }, function (error, userData) {
                if (error) {
                    $scope.vm.hasError = true;
                    $scope.vm.errorMsg = 'Error creating user';
                } else {

                }
            })
        }
    }
})();