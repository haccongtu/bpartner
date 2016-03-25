(function () {
    'use strict';

    angular
        .module('app')
        .service('ChatService', ChatService);

    ChatService.$inject = ['$firebaseArray'];


    function ChatService($firebaseArray) {

        var services = {};

        var firebaseObj = new Firebase(firebaseUrl + 'messages');
        var syncObj = $firebaseArray(firebaseObj);
        services.messages = syncObj;

        services.addMessage = addMessage;

        function addMessage(messageText) {
            if (messageText == '')
                return;
            services.messages.$add({
                text: messageText
            });
        }

        return services;
    }

    
})();