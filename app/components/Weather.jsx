var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
      return{
        isLoading: false,
        err: ''
      }
  },

  onSearchHandle: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      err: '',
      location: '',
      temp: ''
    });

    openWeatherMap.getTemp(location).then(function( temp ){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },
    function( errorMsg ){
        that.setState({
        isLoading: false,
        err: errorMsg.message
      });

      //alert(errorMsg);

    });
    // this.setState({
    //   location: location,
    //   temp: 26
    // });
  },

  render: function(){
    var {isLoading, temp, location, err} = this.state;

    function renderMe(){
      if (isLoading){
        return <h3 className="text-center">Fetching Data...</h3>;
      }  else if (temp && location) {
        return <WeatherMsg location = {location} temp = {temp}/>;
      } else if (err) {
        return <WeatherMsg e = {err}/>;
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch = {this.onSearchHandle}/>
        {renderMe()}
      </div>
    );
  }
});

module.exports = Weather;
