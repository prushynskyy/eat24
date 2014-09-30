'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('LandingPageController', [function(){
	
	}])

	.controller('WiatlistController', ['$scope', 'partyService', 'textMessageService', 'authService', function($scope, partyService, textMessageService, authService){
		// Bind users partis to $scope.parties.
		authService.getCurrentUser().then(function(user) {
			if (user) {
				$scope.parties = partyService.getPartiesByUserId(user.id);
			};
		})
		
		// Object to store new party submissions - waitlist form form
		$scope.newParty = {name: '', phone: '',size: '', done: false, notified: 'No'};

		// Adding new party object to the waitlist
		$scope.saveParty = function() {
			partyService.saveParty($scope.newParty, $scope.currentUser.id);
			$scope.newParty = {name: '', phone: '',size: '', done: false, notified: 'No'};			
		};
		//send text to a party
		$scope.sendTextMessage = function(party) {
			textMessageService.sendTextMessage(party, $scope.currentUser.id);
		};
	}])
	.controller('AuthController', ['$scope', 'authService', function($scope, authService) {

		$scope.user = {email: '', password: ''};

		// Register
		$scope.register = function() {
			authService.register($scope.user);
		};

		// Login User
		$scope.login = function() {
			authService.login($scope.user);
		};

		// Logout users
		$scope.logout = function() {
			authService.logout();
		};
 	}]);






















