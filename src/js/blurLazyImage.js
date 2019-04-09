// Cache elements
var lazyImage = document.getElementById('lazy-background-image'),
	placeholderOverlay = document.getElementById('placeholder-overlay');

// Check if the elements exist
if ( lazyImage && placeholderOverlay ) {
	// Create an image with the full size URL
	var img = new Image();
	img.src = lazyImage.dataset.imageSrc;
	
	// When it finishes loading, add it and fade out the overlay
	img.onload = function () {
		placeholderOverlay.classList.add('fade-out');
		lazyImage.style.backgroundImage = "url(" + img.src + ")";
	};
}