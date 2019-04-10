import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME we directly assign state
        this.state = {
            latitude: null
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
              this.setState({latitude: position.coords.latitude});
            },
            error => {
              console.error(error);
            }
          );
    }
    render() {
        return <div>Lattitude: {this.state.latitude}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
