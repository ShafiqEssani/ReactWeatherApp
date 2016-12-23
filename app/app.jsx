var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// var obj = {
//   name = 'Shafiq';
// }

//
// var { name } = obj; // ek naya var obj with the name of name setted to default name.



ReactDOM.render(
  <Router history = {hashHistory}>

    <Route path ="/" component = {Main}>

      <Route path = "about" component = {About} />

      <Route path = "example" component = {Example} />

      <IndexRoute component = {Weather} />

    </Route>

  </Router>,

  document.getElementById('app')
);
