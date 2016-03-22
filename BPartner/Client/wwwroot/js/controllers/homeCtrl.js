(function () {
    'use strict';
    angular.module('Controllers')
    .controller('homeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$firebaseArray', 'ChatService'];
                             
    function HomeCtrl($scope, $firebaseArray, ChatService) {
        var firebaseObj = new Firebase(firebaseUrl + 'messages');
        var syncObj = $firebaseArray(firebaseObj);
        $scope.messages = syncObj;
        $scope.newMessageText = '';

        $scope.addMessage = function () {
            ChatService.addMessage($scope.newMessageText);
        };
    }
})();