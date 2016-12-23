var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();
    
    var location = this.refs.loc.value;

    if (location.length > 0){
      this.refs.loc.value = '';
      this.props.onSearch(location);
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input type="text" ref = "loc"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
