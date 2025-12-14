// Initialize and add the map
let map;

async function initMap() {
  // Request the "maps" library dynamically
  const { Map } = (await google.maps.importLibrary('maps'));

  // The location of a specific place (e.g., Uluru, Australia)
  const position = { lat: 42.344, lng: 42.031 };

  // Create a map centered at the specified position
  map = new Map(document.getElementById('map'), {
    zoom: 15,
    center: position,
    mapId: '8b37d7206ccf0121d4414bb0',     // Using a demo ID for illustration
  });
}

// Call the function to initialize the map
initMap();
