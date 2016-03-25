(function () {
    'use strict';

    angular
        .module('app')
        .service('AuthorizeService', AuthorizeService);

    AuthorizeService.$inject = ['$q', '$state'];

    function AuthorizeService($q, $state) {
        var service = {};

        service.user = null;

        service.getUser = getUser;
        service.register = register;
        service.login = login;
        service.logOut = logOut;

        function getUser() {
            if (service.user == null)
                $state.go('unauthorize.login');
            return service.user;
        }
        function logOut() {
            service.user = null;
            $state.go('unauthorize.login');
        };
        function login(userInfo, callback) {
            var ref = new Firebase(firebaseUrl);
            ref.authWithPassword(userInfo, function (error, authData) {
                service.user = authData;
                if (service.user !== null) {
                    callback({ success: true });
                }
                else
                    callback({ success: false, error: error });
            }, {
                remember: "sessionOnly"
            });
        }

        function register(user, callback) {
            var ref = new Firebase(firebaseUrl);
            ref.createUser(user, function (error, userData) {
                if (userData == undefined)
                    callback({ success: false, error: error });
                else {
                    var profilesRef = new Firebase(firebaseUrl + 'profiles')
                    profilesRef.push({
                        'uid': userData.uid,
                        'name': user.name
                    });
                    callback({ success: true });
                }
            });
        }

        return service;
    }
})();