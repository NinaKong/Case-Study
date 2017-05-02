import React from 'react';
import TiTag from 'react-icons/lib/ti/tag';
import FaTag from 'react-icons/lib/fa/tag';

var Promotions = React.createClass({
  render: function() {
    return(
        <div className = "promotions-item">
            <FaTag />
            <span>{this.props.singleItemPromotions.Description[0].shortDescription}</span>
        </div>
    ) // return
  } // render
}); //Promotions

module.exports = Promotions;