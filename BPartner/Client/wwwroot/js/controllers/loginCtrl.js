(function () {
    'use strict';
    angular.module('Controllers')
    .controller('loginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope'];
    
    function LoginCtrl($scope) {

        var firebaseObj = new Firebase(firebaseUrl);
        $scope.emailValidation = emailValidation;
        $scope.vm = {};
        function emailValidation(email) {
            return /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/.test(email);
        }
    };
})();