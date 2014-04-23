/* global jQuery, setTimeout */
(function ($, setTimeout) {
    'use strict';

	$(function () {

		// asynchronous load
		var origin = "src/templates/";
		var loadContent = function (selector, url, callback) {
			$.ajax({
				url: origin + url
			}).done(function(content) {
				$(selector).html(content);
				if(callback) {
					callback();
				}
			});
		};
		loadContent('#navbar', 'navbar.html', function () {
			$('form').click(function (event) {
				event.preventDefault();
			});
		});
		loadContent('#main', 'main.html');
		loadContent('#sidebar', 'sidebar.html');
		loadContent('#my-modal', 'modal.html');
		loadContent('#modal-login', 'modal-login.html');
		loadContent('#modal-servizi', 'modal-servizi.html', function () {
			$('.js-search-services').click(function (event) {
				event.preventDefault();
				loadContent('#main', 'services.html', function () {
					$('table tr').click(function () {
						console.log(this);
					})
				});
				$('#modal-servizi').modal('hide');
			})
		});

	});
})(jQuery, setTimeout);
