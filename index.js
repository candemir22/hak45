// Initialize and add the map
let map;

async function initMap() {
  // Request the "maps" library dynamically
  const { Map } = (await google.maps.importLibrary('maps'));
  const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker'));
 
  
  const markerElement = document.createElement('div'); // Your custom marker element

const marker = new google.maps.marker.AdvancedMarkerElement({
  map: map,
  position: { lat: 42.211, lng: 42.2437 },
  content: markerElement,
  gmpClickable: true // Make it clickable and accessible
});


markerElement.addEventListener('gmp-click', () => {
  console.log('Marker clicked!');

});



  
}

// Call the function to initialize the map
initMap();
