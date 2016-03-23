(function () {
    'use strict';

    angular
        .module('Services')
        .service('AuthorizeService', AuthorizeService);

    AuthorizeService.$inject = [];

    function AuthorizeService() {
        var service = {};
        var user = { email: '', password: '', name: '', login: false };

        service.getUser = getUser;
        service.register = register;

        function getUser() {
            var deferred = $q.defer();
            if (user.login == false) {
                deferred.reject();
            } else {
                deferred.resolve(user);
            }
            return deferred.promise;
        }

        function login(user, callback) {
            var ref = new Firebase(firebaseUrl);

        }
        function register(user, callback) {
            var ref = new Firebase(firebaseUrl);
            ref.createUser(user, function (error, userData) {
                if (userData == undefined)
                    callback({ success: false, error: error });
                else
                    callback({ success: true });
            });
        }

        return service;
    }
})();