var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
      return{
        isLoading: false
      }
  },

  onSearchHandle: function(location){
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function( temp ){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function( errorMsg ){
      that.setState({
        isLoading: false
      });

      alert(errorMsg);

    });
    // this.setState({
    //   location: location,
    //   temp: 26
    // });
  },

  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMe(){
      if (isLoading){
        return <h2>Fetching Data...</h2>;
      } else if (temp && location){
        return <WeatherMsg location = {location} temp = {temp}/>;
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch = {this.onSearchHandle}/>
        {renderMe()}
      </div>
    );
  }
});

module.exports = Weather;
