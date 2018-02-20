import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VenuesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.venue = this.props.venue;
  }

  render() {
    return (
      <li>
        <h1>{this.venue.name}</h1>
        <span>{this.venue.address}</span>
      </li>
    );
  }

}

export default VenuesIndexItem;
