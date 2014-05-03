var innovareApp = angular.module('innovareApp', [
	'ui.router',
	'ui.bootstrap'
]);
var navbarView = {
    templateUrl: 'src/templates/navbar.html',
	controller: 'navbarCtrl'
};
var sidebarView =  {
	templateUrl: 'src/templates/sidebar.html',
	controller: 'sidebarController'
};

innovareApp.config( function ($stateProvider) {
	$stateProvider
	    .state('services', {
	        url: '/services',
	        views: {
	            'navbar': navbarView,
	            'sidebar': sidebarView,
	            'main': {
	            	templateUrl: 'src/templates/services.html',
	            	controller: 'servicesCtrl'
	            }
	        }
	    })
	    .state('instruments', {
	        url: '/instruments',
	        views: {
	            'navbar':navbarView,
	            'sidebar':sidebarView,
	            'main': {
	            	templateUrl: 'src/templates/instruments.html',
	            	controller: 'instrumentsController'
	            }
	        }
	    })
	    .state('laboratori', {
	        url: '/laboratori',
	        views: {
	            'navbar':navbarView,
	            'sidebar':sidebarView,
	            'main': {
					templateUrl: 'src/templates/main.html',
					controller: 'servicesMain'
	            }
	        }
	    })
	    .state('index', {
	        url: '*path',
	        views: {
	            'navbar':navbarView,
	            'sidebar':sidebarView,
	            'main': {
	            	templateUrl: 'src/templates/main.html',
	            	controller: 'servicesMain'
	            }
	        }
	    })
});
