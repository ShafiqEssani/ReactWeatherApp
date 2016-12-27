var React = require('react');

//var WeatherMsg = React.createClass({
//
//   render: function(){
//     var loc = this.props.location;
//     var temp = this.props.temp;
//   }
//   return(
//     <h3>Its {temp} in {loc}</h3>
//   );
// });

var WeatherMsg = ({location,temp}) => {
  // var loc = props.location;
  // var temp = props.temp;

  // if (e) {
  //   return (<h3 className="text-center">{e}</h3>);
  // } else {
    return <h3 className="text-center">Its {temp} in {location}</h3>;
  
}

module.exports = WeatherMsg;
