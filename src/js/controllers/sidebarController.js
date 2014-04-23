innovareApp.controller('servicesMain', function ($scope, $sce) {

	// TODO fix the iframes size

    init();

    function init() {
    	// TODO add other iframes from "Chiara Slides"
    	$scope.iframes = [
    		{
    			id: 0,
    			src: $sce.trustAsResourceUrl('http://www.sardegnaricerche.it/index.php?xsl=370&s=254294&v=2&c=3134&nc=1&qr=1&qp=2&vd=2&fa=1&t=3'),
    			'class': 'item active' 
    		},
    		{
    			id: 1,
    			src: $sce.trustAsResourceUrl('http://people.unica.it/liaisonoffice/2014/04/02/entro-il-905-le-domande-per-i-progetti-pilota-progetti-di-sviluppo-congiunti-universita-impresa/'),
    			'class': 'item'
    		},
    		{
    			id: 2,
    			src: $sce.trustAsResourceUrl('http://www.ilo.uniss.it/art/bandi/bando-transnazionale-bionh-per-progetti-di-ricerca-riguardanti-biomarcatori-nel-settore-della-nutrizione-e-della-salute_1480.html'),
    			'class': 'item'
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
