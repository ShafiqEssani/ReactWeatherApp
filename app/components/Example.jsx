var React = require('react');
var {Link} = require('react-router');
var Example = () => {
  return (
    <div>
      <h1 className="text-center">Examples!</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to = "/?location=Karachi">Karachi, Sindh</Link>
        </li>
        <li>
          <Link to = "/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Example;
