(function () {
    'use strict';
    angular.module('tradingPitModule').controller('pitController', ['$scope', 'tradingPitService',
        function pitController($scope, tradingPitService) {

            var quote1 = {
                stock: "ACCS",
                totalDemand: 0,
                totalSupply: 0,
                bestBid: 0,
                bestAsk: 0,
                prevClose: 0,
                lastPrice: 0,
                change: 0,
                turnOver: 0,
                deals: 0,
                time: 0
            };
            var quote2 = {
                stock: "ATLAS",
                totalDemand: 0,
                totalSupply: 0,
                bestBid: 0,
                bestAsk: 0,
                prevClose: 0,
                lastPrice: 0,
                change: 0,
                turnOver: 0,
                deals: 0,
                time: 0
            }

            var quote3 = {
                stock: "KEGN",
                totalDemand: 0,
                totalSupply: 0,
                bestBid: 0,
                bestAsk: 0,
                prevClose: 0,
                lastPrice: 0,
                change: 0,
                turnOver: 0,
                deals: 0,
                time: 0
            };

            $scope.quotes = [quote1, quote2, quote3];

            $scope.initAllOrdersTab = function () {
                tradingPitService.getAllOrders().then(function(res){
                    $scope.orders = res.data;
                }, 
                function(res){
                    console.log("Error while retrieving orders");
                })
            };

        }]);

})();