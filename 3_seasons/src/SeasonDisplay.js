import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brr.. It's cold!",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const month = new Date().getMonth();
  const isNorthernHemisphere = props.latitude > 0;
  const season = getSeason(month, isNorthernHemisphere);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

const getSeason = (month, isNorthernHemisphere) => {
  if (month > 2 && month < 9) {
    return isNorthernHemisphere ? "summer" : "winter";
  }
  return isNorthernHemisphere ? "summer" : "winter";
};

export default SeasonDisplay;
