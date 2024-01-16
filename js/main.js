(function ($) {
	'use strict';

	jQuery(document).ready(function () {

		/* START MENU JS */

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 50) {
				$('.main_header').addClass('sticky_menu');
			}
			else {
				$('.main_header').removeClass('sticky_menu');
			}
		});
		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});
		/* END MENU JS */

		/* START RIPPLES JS */
		$(document).ready(function () {
			// jQuery('#home').ripples({
			// 	resolution: 512,
			// 	dropRadius: 20,
			// 	perturbance: 0.04,
			// });
		});
		/* END RIPPLES JS */

		/* START ISOTOP JS */
		var $grid = $('.work_content_area .row').isotope({
			// options
		});
		// filter items on button click
		$('.work_filter').on('click', 'li', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// filter items on button click
		$('.work_filter').on('click', 'li', function () {
			$(this).addClass('active').siblings().removeClass('active')
		});
		/* END ISOTOP JS */

		/* START LIGHTBOX */

		lightbox.option({
			'resizeDuration': 200,
			'wrapAround': true
		});

		/* END LIGHTBOX JS */

		/* START COUNDOWN JS */
		$('#counter_area').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 5000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNDOWN JS */

	});

	/*PRELOADER JS*/
	$(window).on('load', function () {
		$('.spinner').fadeOut();
		$('.preloader').delay(350).fadeOut('slow');
	});
	/*END PRELOADER JS*/

	// Wow
	new WOW().init();
})(jQuery);