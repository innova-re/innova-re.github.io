/* global jQuery, setTimeout */
(function ($, setTimeout) {
    'use strict';

	$(function () {

		// asynchronous load
		var origin = "src/templates/";
		var loadContent = function (selector, url) {
			$.ajax({
				url: origin + url
			}).done(function(content) {
				$(selector).html(content);
			});
		};

		// TODO move this html modal code into their respective views
		loadContent('#my-modal', 'modal.html');
		loadContent('#modal-login', 'modal-login.html');
		loadContent('#modal-servizi', 'modal-servizi.html');

	});

})(jQuery, setTimeout);
