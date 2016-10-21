/**
 * Created by mahesh on 18/5/16.
 */
 var myApp = angular.module('myApp',[]);

 myApp.controller('FirstController', ['$scope', function($scope) {
   $scope.data = {message:""};
 }]);

 myApp.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2; };
}]);

myApp.controller('sweetCtrl', ['$scope', function($scope) {
 $scope.ras = function() {
    $scope.sweet ={item:"Rasgulla",price:"80"};
  };
 $scope.gul = function() {
    $scope.sweet ={item:"Gulabjamun",price:"60"};;
  };
}]);

myApp.controller('MyController', ['$scope', 'notify', function ($scope, notify) {
    $scope.callNotify = function(msg) {
      notify(msg);
    };
  }]).
 factory('notify', ['$window', function(yahoo) {
    var msgs = [];
    return function(bhai) {
      msgs.push(bhai);
      if (msgs.length == 3) {
        yahoo.alert(msgs.join("\n"));
        msgs = [];
      }
    };
  }]);

/*

 myApp.controller('SecondController', ['$scope', function($scope) {
   $scope.data = {message:""};
 }]);

 myApp.controller('ThirdController', ['$scope', function($scope) {
   $scope.data = {message:""};
 }]);
*/
