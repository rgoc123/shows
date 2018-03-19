import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class ShowsMap extends React.Component {

  componentDidMount() {

    const mapOptions = {
      center: { lat: 40.759147, lng: -73.9802785 },
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.props.shows.forEach(show => {
      this.MarkerManager.createMarkerFromBusiness(show);
    });
    // // this.MarkerManager.updateMarkers(this.props.businesses);
    //
    // google.maps.event.addListener(this.map, 'idle', () => {
    //
    //   const { north, south, east, west } = this.map.getBounds().toJSON();
    //
    //   const bounds = {
    //     northEast: { lat: north, lng: east },
    //     southWest: { lat: south, lng: west }
    //   };
    //
    // });
  }

  render() {
    return (
      <div id="map-container" style={{position: 'fixed'}} ref={ map => this.mapNode = map }></div>
    );
  }

}

export default ShowsMap;
