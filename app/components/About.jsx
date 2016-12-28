var React = require('react');

var About = () => {
  return(
    <div>
      <h1 className="text-center pagetitle">About WeatherApp!</h1>
      <p>This is a simple React Weather Application, What it does is simply asks you for a City name.
      Afterwards it shows you the current temperature in Celsius. If you type in a wrong spelling, it will display you an error message of City Not Found.
     </p>

     <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
        <li>
          <a href="https://github.com/ShafiqEssani/ReactWeatherApp">React WeatherApp Github Link</a> - You can also check out the project files on Github Repository.
        </li>
      </ul>
  </div>
  );
}

module.exports = About;
