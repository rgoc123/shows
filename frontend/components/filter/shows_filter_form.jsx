import React from 'react';

class ShowsFilterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  updateTimeFilter(timeChoice) {
    switch (timeChoice) {
      case 1:
        getState().ui.filters.now === false ?
        this.props.updateFilter("now", true) :
        this.props.updateFilter("now", false);
        break;
      case 2:
        getState().ui.filters.soon === false ?
        this.props.updateFilter("soon", true) :
        this.props.updateFilter("soon", false);
        break;
      case 3:
        getState().ui.filters.later === false ?
        this.props.updateFilter("later", true) :
        this.props.updateFilter("later", false);
        break;
    }
  }

  render() {
    return (
      <div className="filter-form-container">
        <div className="filter-time">
          <div className="filter-time-checkbox">
            <input id="filter-time-input-now"
            type="checkbox"
            onChange={() => this.updateTimeFilter(1)} />
            <label htmlFor="filter-time-input-now" id="label-now">Now<p>(Playing now!)</p></label>

          </div>
          <div className="filter-time-checkbox">
            <input id="filter-time-input-soon"
            type="checkbox"
            onChange={() => this.updateTimeFilter(2)} />
            <label htmlFor="filter-time-input-soon" id="label-soon">Soon<p>(Starts &lt; 1 hour)</p></label>

          </div>
          <div className="filter-time-checkbox">
            <input id="filter-time-input-later"
            type="checkbox"
            onChange={() => this.updateTimeFilter(3)} />
            <label htmlFor="filter-time-input-later" id="label-later">Later<p>(Starts &gt; 1 hour)</p></label>

          </div>
        </div>
      </div>
    )
  }

}

export default ShowsFilterForm;
