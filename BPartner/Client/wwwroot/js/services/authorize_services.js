(function () {
    'use strict';

    angular
        .module('Services')
        .service('AuthorizeService', AuthorizeService);

    AuthorizeService.$inject = [];

    function AuthorizeService() {
    }
})();