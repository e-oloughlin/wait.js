$(function() {

	// -------- Example no 1 -------- //

	// The dom element we are waiting to be in the viewport
	var $pageThree = $(".page.three");

	// add an event listener to the element which will be triggered
	// once within the viewport
	$pageThree.on("visible", function (e) {
		$(e.target).find(".title").removeClass("hidden");
	});

	// Instantiate wait on the element
	wait($pageThree);

	// -------- Example no 2 -------- //

	// Another dom element we are waiting to be in the viewport
	var $pageTwo = $(".page.two");

	console.log($pageTwo);

	wait($pageTwo, {
		offset:  0,
		callback: function (e) {
			
		}
	})
});