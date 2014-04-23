var innovareApp = angular.module('innovareApp', ['ui.router']);
innovareApp.config( function ($stateProvider) {
	$stateProvider
	    .state('services', {
	        url: '/services',
	        views: {
	            'navbar': {
	                templateUrl: 'src/templates/navbar.html'
	            },
	            'sidebar': {
	            	templateUrl: 'src/templates/sidebar.html'
	            },
	            'main': {
	            	templateUrl: 'src/templates/services.html',
	            	controller: 'servicesController'
	            }
	        }
	    })
	    .state('index', {
	        url: '*path',
	        views: {
	            'navbar': {
	                templateUrl: 'src/templates/navbar.html'
	            },
	            'sidebar': {
	            	templateUrl: 'src/templates/sidebar.html',
	            	controller: 'sidebarController'
	            },
	            'main': {
	            	templateUrl: 'src/templates/main.html',
	            	controller: 'servicesMain'
	            }
	        }
	    })
});
