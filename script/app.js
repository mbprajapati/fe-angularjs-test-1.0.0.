/**
 * Created by mahesh on 18/5/16.
 */

var angularApp = angular.module("angularApp",[]);

angularApp.controller("ArticleListController",['$scope','$http', function($scope,$http) {
    //getArticleList();
    function getArticleList() {
        $http.post('data/response.json').success(function (data) {
            $scope.details = data;
        });
    });
