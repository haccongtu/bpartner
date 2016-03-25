(function () {
    'use strict';
    angular.module('Controllers')
    .controller('feedCtrl', feedCtrl);

    feedCtrl.$inject = ['$scope','PersonalService'];

    function feedCtrl($scope, PersonalService) {
        var feeds = [];
        feeds = PersonalService.feeds;
        var ind = 0;
        $scope.buffer = angular.copy(feeds);
        $scope.cachedFeeds = feeds.slice(0, 10);

        $scope.$watch('buffer', function () {
            console.log('data changed');
            ind = 0;
            $scope.cachedFeeds = $scope.buffer.slice(0, 10);
        })
        $scope.loadMore = function () {
            ind = ind + 10
            var r = 10
            if (ind + 10 >= $scope.buffer.length) {
                r = $scope.buffer.length - ind
            }
            console.log("Loading")
            $scope.cachedFeeds = $scope.cachedFeeds.concat($scope.buffer.slice(ind, r + ind))
        }
        $scope.press = function (item) {
            $scope.selectedItem = item
            console.log(item.name)

        }
    }
    

})();