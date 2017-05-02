var React = require('react');

var StarRating = React.createClass({

  render: function() {
    var value = Number(this.props.ratingValue);
    switch (value) {
        case 1: return <div className="rating-star"><span className = "stars-before">★★★★★</span><span className = "stars-after">★</span></div>
        case 2: return <div className="rating-star"><span className = "stars-before">★★★★★</span><span className = "stars-after">★★</span></div>
        case 3: return <div className="rating-star"><span className = "stars-before">★★★★★</span><span className = "stars-after">★★★</span></div>
        case 4: return <div className="rating-star"><span className = "stars-before">★★★★★</span><span className = "stars-after">★★★★</span></div>
        case 5: return <div className="rating-star"><span className = "stars-before">★★★★★</span><span className = "stars-after">★★★★★</span></div>
        default: return <div className="rating-star"><span className = "stars-before">★★★★★</span><span className = "stars-after">★★★★★</span></div>
    }
  }
}); //StarRating

module.exports = StarRating;

