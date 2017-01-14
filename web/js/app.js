
'use strict';

// Declare app level module which depends on views, and components
angular.module('Registry', [
  'ngRoute',
  'Registry.sparkjobserver'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/spark-job-server'});
}]).controller('NavCtrl', function($rootScope, $scope, $location) {
  //
   $scope.navtitle='OpenDataCatalog';
   $scope.logout='Log out';
  // Defining nav items
    $scope.isActive = function(route) {
        $scope.path = $location.path();
        return $location.path() === route;
    };
    $scope.logout = function() {
        //OshinkoAuthService.ClearCredentials();
        $location.path('/login');
    };
});
