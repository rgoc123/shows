import React from 'react';

class ShowsIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.show = this.props.show;
  }

  render() {
    return (
      <div className="shows-index-item">
        <h2>{this.show.artist}</h2>
        <span>{this.show.venue}</span>
        <span>{this.show.date}</span>
        <span>{this.show.start_time} - {this.show.end_time}</span>
        <span>{this.show.genre}</span>
      </div>
    );
  }

}

export default ShowsIndexItem;
