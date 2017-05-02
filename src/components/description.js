var React = require('react');

var Description = React.createClass({
  render: function() {
    return(
      <li>
        {this.props.singleItemDescription}
      </li>
    ) // return
  } // render
}); //Description

module.exports = Description;