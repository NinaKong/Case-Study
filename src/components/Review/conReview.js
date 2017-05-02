var React = require('react');
var StarRating = require('./starRating');
var DateFormat = require('./dateFormat');
var ConReview = React.createClass({
  render: function() {
    var conRatingValue = this.props.singleConReview.overallRating;
    var conDatePosted = this.props.singleConReview.datePosted;
    return(
      <div className="col-md-6">
        <h4>con</h4>
        <div className="rating-subTitle">most helpful 1-2 star review</div>
        <StarRating ratingValue = { conRatingValue } />
        <div className="rating-title">{this.props.singleConReview.title}</div>
        <div className="rating-content">{this.props.singleConReview.review}</div>
        <div className="rating-user"><a className="rating-userName">{this.props.singleConReview.screenName}</a><DateFormat singleDatePosted = {conDatePosted}/></div>
      </div>
    ) // return
  } // render
}); //ConReview

module.exports = ConReview;