innovareApp.controller('servicesMain', function ($scope, $sce) {

	// TODO fix the iframes size

    init();

    function init() {
    	// TODO add other iframes from "Chiara Slides"
    	$scope.carouselImages = [
    		{
    			id: 1,
    			src: 'src/images/carousel-sardegna-ricerca.png',
    			'class': 'item active',
    			href: 'http://www.sardegnaricerche.it/'
    		},
    		{
    			id: 2,
    			src: 'src/images/carousel-IndustrialLiaisonOffice.png',
    			'class': 'item',
    			href: 'http://people.unica.it/liaisonoffice/progetti/progetto-innova-re/'
    		}
    	]
    }
});

innovareApp.controller('sidebarController', function ($scope) {

    init();

    function init() {
        console.log($scope)
    }
});

innovareApp.controller('servicesController', function ($scope) {

    init();

    function init() {
    	$scope.services = [
			{
				id: 1, 
				name: 'Misure XRD', 
				description: 'XRD per stimare le dimensioni delle nanoparticelle.',
				struments: 'Difrattrometro a raggi-X',
				note: 'La diffrattometria a raggi-X (XRD) viene usata per determinare le fasi cristalline contenute nei minerali.'
			},
			{
				id: 2, 
				name: 'Misure XRD', 
				description: 'XRD per stimare le dimensioni delle nanoparticelle.',
				struments: 'Difrattrometro a raggi-X',
				note: 'La diffrattometria a raggi-X (XRD) viene usata per determinare le fasi cristalline contenute nei minerali.'
			},
			{
				id: 3, 
				name: 'Misure XRD', 
				description: 'XRD per stimare le dimensioni delle nanoparticelle.',
				struments: 'Difrattrometro a raggi-X',
				note: 'La diffrattometria a raggi-X (XRD) viene usata per determinare le fasi cristalline contenute nei minerali.'
			},
			{
				id: 4, 
				name: 'Misure XRD', 
				description: 'XRD per stimare le dimensioni delle nanoparticelle.',
				struments: 'Difrattrometro a raggi-X',
				note: 'La diffrattometria a raggi-X (XRD) viene usata per determinare le fasi cristalline contenute nei minerali.'
			},
			{
				id: 5, 
				name: 'Misure XRD', 
				description: 'XRD per stimare le dimensioni delle nanoparticelle.',
				struments: 'Difrattrometro a raggi-X',
				note: 'La diffrattometria a raggi-X (XRD) viene usata per determinare le fasi cristalline contenute nei minerali.'
			}
		];
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


innovareApp.controller('instrumentsController', function ($scope) {

    init();

    function init() {
    	$scope.instruments = [
			{
				id: 1, 
				name: 'Microscopio stereoscopico a fluorescenza', 
				site: 'Via Aurelio Nicolodi, 106, 09123 Cagliari',
				year: '2011',
				model: 'Axiovert 200, Carl Zeiss S.p.A.'
			},
			{
				id: 2, 
				name: 'Microscopio stereoscopico a fluorescenza', 
				site: 'Via Aurelio Nicolodi, 106, 09123 Cagliari',
				year: '2011',
				model: 'Axiovert 200, Carl Zeiss S.p.A.'
			},
			{
				id: 3, 
				name: 'Microscopio stereoscopico a fluorescenza', 
				site: 'Via Aurelio Nicolodi, 106, 09123 Cagliari',
				year: '2011',
				model: 'Axiovert 200, Carl Zeiss S.p.A.'
			},
			{
				id: 4, 
				name: 'Microscopio stereoscopico a fluorescenza', 
				site: 'Via Aurelio Nicolodi, 106, 09123 Cagliari',
				year: '2011',
				model: 'Axiovert 200, Carl Zeiss S.p.A.'
			}
		];
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
