angular.module('dashboardApp', [])

	.controller('DashboardCtrl', function ($scope) {

		$scope.items = [];

		$scope.initialize = function (options) {
			this.options = options;
			$scope.update();
		};

		$scope.update = function () {
			$scope.items = this.options.factory.update().data;
			$scope.$apply();
		};
	});