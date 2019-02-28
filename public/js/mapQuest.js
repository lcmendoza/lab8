function initMap() {
	// add your code here
	L.mapquest.key = 'eAzQ2BhYkpFdrdfEW3rv6ZZzX754cGYu';

	var map = L.mapquest.map('map', {
		center: [32.878803,  -117.235912], 
		layers: L.mapquest.tileLayer('map'),
		zoom: 12, 
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.878803, -117.235912]).addTo(map);
} 