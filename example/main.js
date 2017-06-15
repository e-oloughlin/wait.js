/**
 * Adds a zero before a number if it's less than 10
 *
 * @param  {Number}
 * @return {Number|String}
 */
function prependZero(time) {
	if (time < 10) {
		return "0"+time;
	}

	return time;
}

// Once jQuery is loaded
$(function() {
	// Keep a record of how much time has passed
	// since page load
	var time = 0;

	// Update the timer every second
	setInterval(function () {
		time++;

		$('.timer').text(prependZero(time));
	}, 1000);

	// Loop through each text element
	$(".text").each(function(i, element) {
		var $el = $(element);

		// When it becomes visible, show the current time since page load
		$el.on("visible", function () {
			$el.text("You scrolled to this point in "+time+" seconds");
		});

		// Bind the event listener, specifying the event should be
		// triggered 20px away from the dom element
		wait($el, {
			offset: 20
		});
	});
});