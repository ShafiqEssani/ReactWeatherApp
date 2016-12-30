var React = require('react');

var WeatherMsg = ({location,temp}) => {
  return <h3 className="text-center">Its {temp} in {location}</h3>;
}

module.exports = WeatherMsg;
