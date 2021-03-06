var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  onSearch: function(e){
    e.preventDefault();

    var nloc = this.refs.autoloc.value;
    var encodeLoc = encodeURIComponent(nloc);

    if( nloc.length > 0 ) {
      this.refs.autoloc.value = '';
      window.location.hash = '#/?location=' + encodeLoc;
    }
  },


  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather Menu</li>
            <li>
              <IndexLink to = "/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to = "/about"  activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to = "/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
                <li><input type="search" placeholder="Search Here" ref="autoloc" /></li>
                <li><input type="submit" className="button" value="Search"/></li>
            </ul>
          </form>
        </div>

      </div>
      );
  }
});

module.exports = Nav;
