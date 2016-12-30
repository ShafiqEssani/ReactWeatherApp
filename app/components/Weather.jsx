var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass ({

  getInitialState: function(){
      return{
        isLoading: false,
      }
  },

  onSearchHandle: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      err: undefined,
      location: undefined,
      temp: undefined
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
        err: "Error: Not found city"
      });
      //alert(errorMsg);
    });

    // this.setState({
    //   location: location,
    //   temp: 26
    // });
  },
  componentDidMount: function(){
    var loc = this.props.location.query.location;

    if (loc && loc.length > 0) {
      this.onSearchHandle(loc);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps){
    var loc = newProps.location.query.location;

    if (loc && loc.length > 0) {
      this.onSearchHandle(loc);
      window.location.hash = '#/';
    }
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
