import React from 'react';

import ShowsIndexItem from './shows_index_item';
import ShowsMap from '../map/shows_map';
import ShowsFilterFormContainer from '../filter/shows_filter_form_container';

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
      <div className="container">
        <ShowsFilterFormContainer />
        <div className="shows-index-container">
          <div className="shows-index-col-a">
            {this.createIndex()}
          </div>
          <div className="shows-index-col-b">
            <ShowsMap shows={this.props.shows} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowsIndex;
