import React from 'react';
import ReactDOM from 'react-dom';

import ShowsIndexItem from './shows_index_item';
import ShowsMap from '../map/shows_map';
import ShowsFilterFormContainer from '../filter/shows_filter_form_container';

class ShowsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listShow: "block",
      mapShow: "none",
    };
  }

  componentDidMount() {
    this.props.fetchShows();
  }

  createIndex() {
    return this.props.shows.map(show => {
      return <ShowsIndexItem key={show.id} show={show} />;
    });
  }

  toggleListMap() {
    if (document.getElementById("list").checked) {
      this.setState({
        listShow: "block",
        mapShow: "none"
      });
    } else if (document.getElementById("map").checked) {
      this.setState({
        listShow: "none",
        mapShow: "block"
      });
    }
  }

  render() {
    return (
      <div className="container">
        <ShowsFilterFormContainer />
        <div className="map-or-list">
          <input id="list" type="radio" name="map-list" value="list" onClick={() => this.toggleListMap()}
          />
          <label htmlFor="list">List</label>
          <input id="map" type="radio" name="map-list" value="map" onClick={() => this.toggleListMap()}
           />
          <label htmlFor="map">Map</label>
        </div>
        <div className="shows-index-container">
          <div className="shows-index-col-a" style={{display: this.state.listShow}}>
            {this.createIndex()}
          </div>
          <div className="shows-index-col-b" style={{display: this.state.mapShow}}>
            <ShowsMap shows={this.props.shows} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowsIndex;
