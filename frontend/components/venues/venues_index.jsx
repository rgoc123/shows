import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import VenuesIndexItem from './venues_index_item';

class VenuesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchVenues();
  }

  render() {
    return this.props.venues.map(
      venue => <VenuesIndexItem key={venue.id} venue={venue} />
    );
  }

}

export default VenuesIndex;
