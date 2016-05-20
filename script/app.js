/**
 * Created by mahesh on 18/5/16.
 */

var articleApp = angular.module("articleApp",[]);

articleApp.controller('ArticleCtrl', function ($scope, $http) {
    $http.get('http://data/response.json').success(function(data) {
        $scope.Data = Data;
    });
});
