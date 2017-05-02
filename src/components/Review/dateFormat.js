var React = require('react');

var DateFormat = React.createClass({

  render: function() {
    var date = this.props.singleDatePosted;
    date = new Date(date);
    var month = date.getUTCMonth();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    var newdate = monthNames[month] + " " + day +  ", " + year;
    return (<span>{newdate}</span>)
  }
}); //DateFormat

module.exports = DateFormat;

