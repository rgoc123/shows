import React from 'react';

import ShowsIndexItem from './shows_index_item';

class ShowsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    return this.props.shows.map(show => {
      return <ShowsIndexItem key={show.id} show={show} />;
    });
  }
}

export default ShowsIndex;
