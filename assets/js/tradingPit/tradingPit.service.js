angular.module("app").factory("tradingPitService", ['$http', function($http){
    var tradingPitService = {
        getAllOrders: function(){

            return $http.get("http://localhost:9095/api/trade/orders/")
            .then(function success(res){
                console.log(res);
                return res;
            },
            function error(res){
                console.log(res);
                return res;
            });
        }
    };
    
    return tradingPitService;

}]);