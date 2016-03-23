(function () {
    'use strict';
    angular.module('Controllers')
    .controller('homeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$firebaseArray', 'ChatService'];

    function HomeCtrl($scope, $firebaseArray, ChatService) {

        var messsages = ChatService.messages;
        var newMesssage = {};

        $scope.newMesssage = newMesssage;
        $scope.messages = messsages;
        $scope.addMessage = addMessage;

        function addMessage() {
            ChatService.addMessage(newMesssage.value);
            newMesssage.value = '';
        };
    }
})();