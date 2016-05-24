/**
 * Created by mahesh on 18/5/16.
 */

//header('content-type: application/json; charset=utf-8');
//header("access-control-allow-origin: *");

var articleApp = angular.module("articleApp",[]);

articleApp.controller('ArticleListCtrl', function ($scope, $http) {
    $http.get('data/response.json').success(function(data) {
        $scope.Data = data;
    });
});

articleApp.controller('ArticleDetailCtrl', function ($scope, $http) {
    $http.get('data/response.json').success(function(data) {
        $scope.Data = data;
    });
});

/* Routing
articleApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/index.html',
                controller  : 'ArticalListController'
            })
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'ArticleDetailCtrl'
            });
    });
*/
