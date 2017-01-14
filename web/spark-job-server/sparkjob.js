'use strict';

angular.module('Registry.sparkjobserver', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spark-job-server', {
    templateUrl: 'spark-job-server/sparkjob.html',
    controller: 'SparkJobCtrl'
  });
}])
//.factory("SchemaService",function(){
//  var schemas=[
//    { schemaId: "24190df4-e7fd-4a05-b0d9-a3b384c076e3", type: "a",name: "a", namespace: "a", doc: "a", fields: [ { name: "occupation", type: "string" }, { name: "name", type: "string" }, { name: "age", type: "string" } ] }
//  ];
//
//  var getSchemas = function() {
//    return schemas;
//  };
//
//  return {
//    getSchemas: getSchemas
//  };
//
//})
.controller('SparkJobCtrl', [function() {

}]);
//.controller('MetaRegistryCtrl',['SchemaService', function($scope, SchemaService) {
//
//$scope.name=SchemaService.getSchemas();
//
//
//// $rootScope.getSchemas(function(){
////
////   $http({
////     method: 'GET',
////     url: '/api/schema'
////   }).then(function successCallback(response) {
////       // this callback will be called asynchronously
////       // when the response is available
////     }, function errorCallback(response) {
////       // called asynchronously if an error occurs
////       // or server returns response with an error status.
////     });
//// }]);
//
//
//}]);
