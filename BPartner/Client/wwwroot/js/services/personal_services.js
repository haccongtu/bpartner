(function () {
    'use strict';

    angular
        .module('Services')
        .service('PersonalService', PersonalService);


    function PersonalService() {

        var feedTemp = [];
        var services = {};
        for (var i = 1; i < 2001; i++) {
            feedTemp.push({
                name: 'Makakura' + i.toString(),
                text: 'Đây là mô tả của feed'
            })
        }
        services.feeds = feedTemp;
        services.addFeed = addFeed;
        services.editFeed = editFeed;
        services.removeFeed = removeFeed;

        function addFeed(messageText) {

        }
        function editFeed(messageText) {

        }
        function removeFeed(messageText) {

        }
        return services;
    }


})();