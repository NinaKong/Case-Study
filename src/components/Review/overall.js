var React = require('react');
var StarRating = require('./starRating');

var Overall = React.createClass({
  render: function() {
    return(
      <section className="overallRating">
        <div className="col-md-6 col-xs-12">
          <StarRating ratingValue = { 5 } /><span className="overallRating-word">overall</span>
        </div>
        <a className="col-md-6 col-xs-12 overallRating-viewAll">
            view all 12 reviews
        </a>
      </section>
    ) // return
  } // render
}); //Overall

module.exports = Overall;