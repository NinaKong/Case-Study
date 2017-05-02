var React = require('react');
var StarRating = require('./starRating');
var DateFormat = require('./dateFormat');
var ProReview = React.createClass({
  render: function() {
    var proRatingValue = this.props.singleProReview.overallRating;
    var proDatePosted = this.props.singleProReview.datePosted;
    return(
      <div className="col-md-6">
        <h4>pro</h4>
        <div className="rating-subTitle">most helpful 4-5 star review</div>
        <StarRating ratingValue = { proRatingValue } />
        <div className="rating-title">{this.props.singleProReview.title}</div>
        <div className="rating-content">{this.props.singleProReview.review}</div>
        <div className="rating-user"><a className="rating-userName">{this.props.singleProReview.screenName}</a><DateFormat singleDatePosted = {proDatePosted}/></div>
      </div>
    ) // return
  } // render
}); //ProReview

module.exports = ProReview;