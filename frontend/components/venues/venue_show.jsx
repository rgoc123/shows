import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class VenueShow extends React.Component {

  componentDidMount() {
    this.props.fetchVenue(this.props.match.params.businessId);
  }

  render() {

    const venue = this.props.venue;

    return (
      <div className="venues-index-item">
        <h2>{venue.name}</h2>
        <span>{venue.neighborhood}</span>
        <span>{venue.address}</span>
        <span>{venue.city}, {venue.state} {venue.zip}</span>
        <span>{venue.category}</span>
      </div>
    );
  }

}

export default VenueShow;
