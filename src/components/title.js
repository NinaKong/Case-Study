var React = require('react');

var Title = React.createClass({
  render: function() {
    return(
        <h1>{this.props.singleTitle}</h1>
    ) // return
  } // render
}); //Title

module.exports = Title;