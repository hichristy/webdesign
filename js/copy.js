$(document).ready(function() {
    $('#splitScreen').multiscroll({
		scrollingSpeed: 500,
		easing: "easeOutExpo",
		sectionSelector: '.slide',
		leftSelector: '.left_slides',
    rightSelector: '.right_slides'
	});
});
