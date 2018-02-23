import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VenuesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.venue = this.props.venue;
  }

  render() {
    if (!this.venue) {
      return null;
    } else {
      return (
        <div className="venues-index-item">
          <Link to={`/venues/${this.venue.id}`}>
            <h2>{this.venue.name}</h2>
          </Link>
          <span>{this.venue.neighborhood}</span>
          <span>{this.venue.address}</span>
          <span>{this.venue.city}, {this.venue.state} {this.venue.zip}</span>
          <span>{this.venue.category}</span>
        </div>
      );
    }
  }

}

export default VenuesIndexItem;
