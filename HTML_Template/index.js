$(document).ready(function () {
	// Banner Owl Carousel
	$("#banner-area .owl-carousel").owlCarousel({
		dots: true,
		items: 1,
	});

	// Top Sale Owl Carousel
	$("#top-sale .owl-carousel").owlCarousel({
		dots: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		// autoplayHoverPause:true
		resposive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});

	// Isotope filter
	let $grid = $(".grid").isotope({
		itemSelector: ".grid-item",
		layoutMode: "fitRows",
	});

	// Filter items on button click
	$(".button-group").on("click", "button", function () {
		let filterValue = $(this).attr("data-filter");

		$grid.isotope({
			filter: filterValue,
		});
	});

	// New Phones Owl Carousel
	$("#new-phones .owl-carousel").owlCarousel({
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		// autoplayHoverPause:true
		resposive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});

	// Blogs Owl Carousel
	$("#blogs .owl-carousel").owlCarousel({
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		// autoplayHoverPause:true
		resposive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
		},
	});

	// Product QTY Section
	let $qtyPlus = $(".qty .qty-plus");
	let $qtyMinus = $(".qty .qty-minus");
	// let $qtyInput = $(".qty .qty-input");

	$qtyPlus.click(function (e) {
		let $qtyInput = $(`.qty-input[data-id='${$(this).data("id")}']`);
		if ($qtyInput.val() >= 1 && $qtyInput.val() <= 9) {
			$qtyInput.val(function (i, oldVal) {
				return ++oldVal;
			});
		}
	});

	$qtyMinus.click(function (e) {
		let $qtyInput = $(`.qty-input[data-id='${$(this).data("id")}']`);
		if ($qtyInput.val() > 1 && $qtyInput.val() <= 10) {
			$qtyInput.val(function (i, oldVal) {
				return --oldVal;
			});
		}
	});
});
