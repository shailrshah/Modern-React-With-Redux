import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import SeasonError from './SeasonError';

class App extends React.Component {

  state = { latitude: null, errorMessage: null };

  // Reccomended to do all data loading here, rather than constructor
  componentDidMount() {
    console.log("Component is rendered...");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log("Component is updated...");
  }

  renderContent() {
    if (this.state.errorMessage) {
      return <SeasonError text="Could not get location" />;
    } else if (this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude}/>;
    }
    return <div><Spinner text="Please share your location..." /></div>;
  }

  render() {
    return(
      <div> 
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
