import React from 'react';

import ShowsIndexItem from './shows_index_item';
import ShowsMap from '../map/shows_map';

class ShowsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  createIndex() {
    return this.props.shows.map(show => {
      return <ShowsIndexItem key={show.id} show={show} />;
    });
  }

  render() {
    return (
      <div>
        {this.createIndex()}
        <ShowsMap />
      </div>
    );
  }
}

export default ShowsIndex;
