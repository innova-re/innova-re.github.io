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
		loadContent('#navbar', 'navbar.html');
		loadContent('#main', 'main.html');
		loadContent('#sidebar', 'sidebar.html');
		loadContent('#my-modal', 'modal.html');
		loadContent('#modal-login', 'modal-login.html');

	});
})(jQuery, setTimeout);
