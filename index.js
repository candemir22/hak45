// Initialize and add the map
let map;

async function initMap() {
  // Request the "maps" library dynamically
  const { Map } = (await google.maps.importLibrary('maps'));
  const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker'));
    gmp-map center="42.773,42.01" zoom="28" ;
  // The location of a specific place (e.g., Uluru, Australia)
  const position = { lat: 42.344, lng: 43.031 };

  // Create a map centered at the specified position
  map = new Map(document.getElementById('map'), {
    zoom: 18,
    center: position,
    mapId: 'map',     // Using a demo ID for illustration
  });
}

// Call the function to initialize the map
initMap();
