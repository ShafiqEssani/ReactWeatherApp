var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass ({

  getInitialState: function(){
      return{
        isLoading: false,
        //err: ''
      }
  },

  onSearchHandle: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      err: undefined
      // location: '',
      // temp: ''
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
  render: function() {

    var {isLoading, temp, location, err} = this.state;

    function renderMsg() {
      if (isLoading){
        return <h3 className="text-center">Fetching Data...</h3>;
      }  else if (temp && location) {
        return <WeatherMsg location = {location} temp = {temp}/>;
      }
    }

    function renderError(){
      if (typeof err === 'string'){
        return(
          <ErrorModal msg = {err}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center pagetitle">Get Weather</h1>
        <WeatherForm onSearch = {this.onSearchHandle}/>
        {renderMsg()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
