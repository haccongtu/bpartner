﻿(function () {
    'use strict';
    angular.module('Controllers')
    .controller('homeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'AuthorizeService', 'ChatService'];

    function HomeCtrl($scope, AuthorizeSerivice, ChatService) {
        init();
        function init() {
            var userInfo = AuthorizeSerivice.getUser();
            if (userInfo !== null) {
                var messsages = ChatService.messages;
                var newMesssage = {};

                $scope.newMesssage = newMesssage;
                $scope.messages = messsages;
                $scope.addMessage = addMessage;
            }
        }
        function addMessage() {
            ChatService.addMessage(newMesssage.value);
            newMesssage.value = '';
        };
    }
})();