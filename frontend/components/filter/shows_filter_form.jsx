import React from 'react';

class ShowsFilterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="filter-form-container">
        <div className="filter-date">
          <input id="filter-date-input" type="checkbox" />
          <label htmlFor="filter-date-input">Today and Later</label>
        </div>
      </div>
    )
  }

}

export default ShowsFilterForm;
