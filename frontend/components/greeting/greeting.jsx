import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1>Hellooo. This is the greeting!</h1>
      </div>
    );
  }

}

export default Greeting;
