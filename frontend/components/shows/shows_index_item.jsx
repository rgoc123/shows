import React from 'react';

class ShowsIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.show = this.props.show;
  }

  amPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let newTime = hours + ":" + minutes + " " + ampm;
    return newTime;
  }

  startTime() {
    let startTime = new Date(this.show.start_time);
    return this.amPM(startTime);
  }

  endTime() {
    let endTime = new Date(this.show.end_time);
    return this.amPM(endTime);
  }

  render() {
    debugger
    return (
      <div className="shows-index-item">
        <h2>{this.show.artist}</h2>
        <span>{this.show.venue.name}</span>
        <span>{this.show.date}</span>
        <span>{this.startTime()} - {this.endTime()}</span>
        <span>{this.show.genre}</span>
      </div>
    );
  }

}

export default ShowsIndexItem;
