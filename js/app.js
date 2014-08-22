angular.module("MyApp", ['ngRoute'])

.config(function($routeProvider){
	$routeProvider.when('/view1',{
		templateUrl : "View1.html",
		controller : "View1Controller"
	}).when('/view2', {
		templateUrl : "View2.html",
		controller : "View2Controller"
	}).when('/view3', {
		templateUrl : "View3.html",
		controller : "View3Controller"
	}).otherwise({
		redirectTo : "/view1"
	});
})

.controller("CoffeeController", function ($scope,dataService){

	$scope.product;

	$scope.listArray = dataService.getItem();

	$scope.addToCart = function(){

			dataService.addItem($scope.product);
	
			console.log($scope.listArray) 


		}
		
		$scope.deleteItem = function(deletedItem){
			dataService.removeItem(deletedItem);
	}
})

.controller("View1Controller", function($scope){
	// $scope.test = "Hello World 1";
})

.controller("View2Controller", function($scope){
	// $scope.test = "Hello World 2";
})

.controller("View3Controller", function($scope){
	// $scope.test = "Hello World 3";
})

