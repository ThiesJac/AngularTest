'use strict';

angular.module('tutorialApp', [])
  .controller('ArticlesCtrl', function ($scope) {
    $scope.articles = [{
      id: 1,
      name: "Pizza Vegetaria",
      price: 5
    }, ];
  });
