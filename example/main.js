/**
 * @param  {Number}
 * @return {String}
 */
function prependZero(time) {
	if (time < 10) {
		return "0"+time;
	}

	return time;
}

// Once jQuery is loaded
$(function() {
	var time = 0;

	var $timer = $('.timer');

	// Update the timer on the page to show how long
	// has passed
	setInterval(function () {
		time++;

		$timer.text(prependZero(time));
	}, 1000);

	// The dom element we are waiting to be in the viewport
	$(".text").each(function(i, element) {
		var $el = $(element);

		$el.on("visible", function () {
			console.log(time);
		});

		wait($el);
	});


	/*	
	$text.on("visible", function (e) {
		// $(e.target).find(".title").removeClass("hidden");


	});

	// Instantiate wait on the element
	*/

	// wait($pageTwo, {
	// 	offset:  0,
	// 	callback: function (e) {
			
	// 	}
	// })
});