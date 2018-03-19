export default class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromShow(show) {
    const position = new google.maps.LatLng(business.lat, business.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      showId: show.id
    });

    this.markers[marker.showId] = marker;
    return marker;
  }

  updateMarkers(benches) {
    console.log('time to update');
  }

}
