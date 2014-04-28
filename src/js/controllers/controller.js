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

innovareApp.controller('sidebarController', function ($scope) {
});

// TODO For the minification you need to provide an array 
innovareApp.controller('servicesCtrl', function ($scope, $http) {

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

    $scope.addService = function() {
      $scope.services.push($scope.enteredName);
    };

    $scope.onSubmit = function(obj) {
        $scope.services.push(obj);
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


innovareApp.controller('instrumentsController', function ($scope, $http) {

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

    $('#modal-instruments').modal('hide');
});
