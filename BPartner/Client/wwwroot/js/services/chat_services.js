(function () {
    'use strict';

    angular
        .module('Services')
        .service('ChatService', ChatService);

    ChatService.$inject = [];

    var messages = [];

    function ChatService() {

        var services = {};

        services.addMessage = addMessage;

        return services;
    }

    function addMessage(messageText) {
        if (messageText == '')
            return;
        //messages.$add({
        //    text: messageText
        //});

        console.log("Đã thêm message " + messageText);
    }
})();