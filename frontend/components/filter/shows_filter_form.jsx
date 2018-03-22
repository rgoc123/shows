import React from 'react';

class ShowsFilterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  updateDateFilter() {
    debugger
    if (!getState().ui.filters.date) {
      this.props.updateFilter("date", Date.now());
    } else {
      this.props.updateFilter("date", "");
    }

  }

  render() {
    return (
      <div className="filter-form-container">
        <div className="filter-date">
          <input id="filter-date-input"
          type="checkbox"
          onChange={() => this.updateDateFilter()} />
          <label htmlFor="filter-date-input">Today and Later</label>
        </div>
      </div>
    )
  }

}

export default ShowsFilterForm;
