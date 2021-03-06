// TODO move this controller outside from this file
var modalEditServiceCtrl = function ($scope, $modalInstance, service, services) {
	// reference http://plnkr.co/edit/WLJfs8axxMJ419N2osBY?p=preview
	$scope.service = service;
	$scope.services = services;

	$scope.submit = function () {
		// TODO better way to change the corresponding service
		$scope.services[service.id - 1] = service;
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
};

var modalAddServiceCtrl = function ($scope, $modalInstance, $log, service, services) {
	$scope.service = service;
	$scope.services = services;
	$scope.submit = function () {
		console.log($scope);
		$scope.services.push(service);
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}

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
			controller: modalEditServiceCtrl,
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
			controller: modalEditServiceCtrl,
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

    $scope.modalAddService = function () {
		$scope.service = {};
		var modalInstance = $modal.open({
			templateUrl: 'src/templates/modal-service-edit.html',
			controller: modalAddServiceCtrl,
			resolve: {
				service: function () {
					return $scope.service;
				},
				services: function () {
					return $scope.services;
				}
			}
		});
    };

    $scope.modalBookService = function (id) {

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
	$scope.modalEditService = function (id) {

		var modalInstance = $modal.open({
			templateUrl: 'src/templates/modal-service-edit.html',
			controller: modalEditServiceCtrl,
			resolve: {
				service: function () {
					return $scope.services[id];
				},
				services: function () {
					return $scope.services;
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
