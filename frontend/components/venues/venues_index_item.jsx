import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VenuesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.venue = this.props.venue;
  }

  render() {
    return (
      <div className="venue-index-item">
        <h1>{this.venue.name}</h1>
        <span>{this.venue.neighborhood}</span>
        <span>{this.venue.address}</span>
        <span>{this.venue.city}, {this.venue.state} {this.venue.zip}</span>
        <span>{this.venue.category}</span>
      </div>
    );
  }

}

export default VenuesIndexItem;
