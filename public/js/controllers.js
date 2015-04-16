var employeeApp = angular.module('employeeApp', []);

employeeApp.controller('CommitCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/commitData').success(function(data){
    $scope.commits = JSON.parse(data.text)
    console.log($scope.commits);
  })
}]);
