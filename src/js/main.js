/* global jQuery, setTimeout */
(function ($, setTimeout) {
    'use strict';

	$(function () {

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
	});
})(jQuery, setTimeout);
