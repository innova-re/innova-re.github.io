// TODO move this controller outside from this file
var ModalInstanceCtrl = function ($scope, $modalInstance, service) {
	// reference http://plnkr.co/edit/WLJfs8axxMJ419N2osBY?p=preview
	$scope.service = service;

	$scope.ok = function () {
		// $modalInstance.close($scope.selected.item);
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
};

var ModalBookCtrl = function ($scope, $modalInstance, categories, deliveryService) {
	$scope.categories = categories;
	$scope.deliveryService = deliveryService;

	$scope.ok = function () {
		// $modalInstance.close($scope.selected.item);
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
};

innovareApp.controller('servicesMain', function ($scope, $http) {

	// TODO fix the iframes size
    var init = function() {
    	// TODO add other iframes from "Chiara Slides"
    	$http.get('src/fixtures/carousel.json').success(function (data) {
          $scope.carouselImages = data;
        });
        $scope.sortField = 'name';
    };

    init();

});

innovareApp.controller('navbarCtrl', function ($scope, $modal) {
	// TODO you should move here the logic to open a new modal
	// instead of using main.js

	/* TODO change this name into editServiceModal */
	$scope.open = function (templateFile) {
		var modalInstance = $modal.open({
			templateUrl: 'src/templates/' + templateFile,
			controller: ModalInstanceCtrl,
			resolve: {
				// TODO can i get rid of the following code? 
				service: function () {
				  return true;
				}
			}
		});
	};

});

innovareApp.controller('sidebarController', function ($scope, $modal) {
	// TODO you should move here the logic to open a new modal
	// instead of using main.js

	/* TODO change this name into editServiceModal */
	$scope.open = function (templateFile) {
		var modalInstance = $modal.open({
			templateUrl: 'src/templates/' + templateFile,
			controller: ModalInstanceCtrl,
			resolve: {
				// TODO can i get rid of the following code? 
				service: function () {
				  return true;
				}
			}
		});
	};

});

// TODO For the minification you need to provide an array 
innovareApp.controller('servicesCtrl', function ($scope, $http, $modal, $log) {

    init();

    function init() {
    	$http.get('src/fixtures/services.json').success(function (data) {
        	$scope.services = data;
        });
    	$http.get('src/fixtures/reserve.json').success(function (data) {
    		// TODO should I rewrite the data to get fixtures
    		$scope.categories = data[0].categories;
        });
        $http.get('src/fixtures/reserve.json').success(function (data) {
    		// TODO should I rewrite the data to get fixtures
    		$scope.deliveryService = data[1].deliveryService;
        });
    }

    $scope.openBookModal = function (id) {

		var modalInstance = $modal.open({
			templateUrl: 'src/templates/modal-book.html',
			controller: ModalBookCtrl,
			resolve: {
				categories: function () {
					return $scope.categories;
				},
				deliveryService: function () {
					return $scope.deliveryService;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

    /* TODO change this name into editServiceModal */
	$scope.open = function (id, template) {

		var modalInstance = $modal.open({
			templateUrl: 'src/templates/' + template,
			controller: ModalInstanceCtrl,
			resolve: {
				service: function () {
					console.log($scope.services[id])
				  return $scope.services[id];
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

    $scope.onAddService = function(obj) {
        $scope.services.push(obj);
        $('#modal-add-service').modal('hide');
    }

    $scope.editService = function(id) {
    	console.log(id, $scope.services[id]);
        $('#modal-add-service').modal();
    }

    var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	 
	var checkin = $('#dpd1').datepicker({
		onRender: function (date) {
			return date.valueOf() < now.valueOf() ? 'disabled' : '';
		}
	}).data('datepicker');

    $('#modal-servizi').modal('hide');
});


innovareApp.controller('instrumentsController', function ($scope, $http, $modal, $log) {

    init();

    function init() {
    	$http.get('src/fixtures/instruments.json').success(function (data) {
          $scope.instruments = data;
        });
        $http.get('src/fixtures/reserve.json').success(function (data) {
    		// TODO should I rewrite the data to get fixtures
    		$scope.categories = data[0].categories;
        });
        $http.get('src/fixtures/reserve.json').success(function (data) {
    		// TODO should I rewrite the data to get fixtures
    		$scope.deliveryService = data[1].deliveryService;
        });

    }

    $scope.openBookModal = function (id) {

		var modalInstance = $modal.open({
			templateUrl: 'src/templates/modal-book.html',
			controller: ModalBookCtrl,
			resolve: {
				categories: function () {
					return $scope.categories;
				},
				deliveryService: function () {
					return $scope.deliveryService;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

    $('#modal-instruments').modal('hide');
});
