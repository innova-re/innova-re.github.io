innovareApp.controller('servicesMain', function ($scope, $http) {

	// TODO fix the iframes size

    init();

    function init() {
    	// TODO add other iframes from "Chiara Slides"
    	$http.get('src/fixtures/carousel.json').success(function (data) {
          $scope.carouselImages = data;
        });
    }
});

innovareApp.controller('sidebarController', function ($scope) {

    init();

    function init() {
        console.log($scope)
    }
});

innovareApp.controller('servicesController', function ($scope, $http) {

    init();

    function init() {
    	$http.get('src/fixtures/services.json').success(function (data) {
          $scope.services = data;
        });
		$scope.categories = [
			{
				name: 'Docente/Ricercatore'
			},
			{
				name: 'Dottorando'
			},
			{
				name: 'Assegnista/Borsista'
			},
			{
				name: 'Studente'
			},
			{
				name: 'Professionista'
			},
			{
				name: 'Impresa'
			},
			{
				name: 'Altro'
			}
		];
		$scope.deliveryService = [
			{
				name: 'Con l\'ausilio del tecnico di laboratorio'
			},
			{
				name: 'Senza l\'ausilio del tecnico di laboratorio'
			}
		];
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
		// TODO Remove duplicate code.
		$scope.categories = [
			{
				name: 'Docente/Ricercatore'
			},
			{
				name: 'Dottorando'
			},
			{
				name: 'Assegnista/Borsista'
			},
			{
				name: 'Studente'
			},
			{
				name: 'Professionista'
			},
			{
				name: 'Impresa'
			},
			{
				name: 'Altro'
			}
		];
		$scope.deliveryService = [
			{
				name: 'Con l\'ausilio del tecnico di laboratorio'
			},
			{
				name: 'Senza l\'ausilio del tecnico di laboratorio'
			}
		];
    }

    $('#modal-instruments').modal('hide');
});
