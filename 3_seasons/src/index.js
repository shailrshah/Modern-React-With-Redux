import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    //THIS IS THE ONLY TIME we directly assign state
    this.state = {
      latitude: null,
      errorMessage: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }
    return <div>Latitude: loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
