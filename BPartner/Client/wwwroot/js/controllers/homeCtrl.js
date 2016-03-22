(function () {
    'use strict';
    angular.module('Controllers')
    .controller('homeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$firebaseArray', 'ChatService'];
                             
    function HomeCtrl($scope, $firebaseArray, ChatService) {
       
        $scope.newMessageText = '';

        $scope.messages = ChatService.messages;

        $scope.addMessage = function () {
            ChatService.addMessage($scope.newMessageText);
        };
    }
})();