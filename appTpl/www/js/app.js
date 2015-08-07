// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var appTpl = angular.module('appTpl1', ['ionic','ngCordova']);

appTpl.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});




appTpl.config(function($stateProvider, $urlRouterProvider) {


$stateProvider
	.state("home", {
		url: "/home",
		views:{
		templateUrl: "template/home.html",
		controller: "homeController"}
	})
	.state("help", {
		url: "/help",
		views: {
		templateUrl: "template/help.html",
		controller: "helpController"}
	})
	.state("services", {
		url: "/services",
		views: {
		templateUrl: "template/services.html",
		controller: "servicesController"}
	})
	.state("service", {
		url: "/services/:idservice",
		views:{
		templateUrl: "template/service.html",
		controller: "serviceController"}
	})
	.state("start", {
		url: "/",
		views:{
		templateUrl: "template/start.html",
		controller: "startController"}
	});


$urlRouterProvider.otherwise('/start');


});


appTpl.controller('RootCtrl',function($scope) {
   $scope._closeApp = function(){ionic.Platform.exitApp();}
});


appTpl.controller("startController", function($scope, $ionicLoading){
	alert("I'm in startController");
	console.log("Entro in startController");
	$ionicPlatform.ready(function(){	
		$ionicLoading.show({template: "Loading..."});
		/*
		if (window.cordova){
		//istanzio il db con dbcopy o altro
		}else{
		//istanzio con localstorage
		//db = openDatabase("websql.db", "1.0","My Local WebSQL DB", 2 * 1024 * 1024);
		//db.transaction(function(tx){});
		}
		*/
		$ionicLoading.hide();
		alert("vado a home");
		$location.path("/home");
	});
});

appTpl.controller("homeController", function($scope){ 
	console.log("Entro in homeController");
});
appTpl.controller("helpController", function($scope){});
appTpl.controller("servicesController", function($scope){});
appTpl.controller("serviceController", function($scope){});