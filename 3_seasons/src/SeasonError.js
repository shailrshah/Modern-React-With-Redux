import React from 'react';

const SeasonError = props => {
    return (
        <div className="ui active dimmer">
          <div className="ui negative massive message">
            <p>{props.text}</p>
          </div>
        </div>
      );
}

SeasonError.defaultProps = {
    text: 'Something went wrong...'
}

export default SeasonError;