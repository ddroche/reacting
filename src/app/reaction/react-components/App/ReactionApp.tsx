import * as React from 'react';
import './ReactionApp.scss';

class ReactionApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello World!
        </p>
      </div>
    );
  }
}

export default ReactionApp;
