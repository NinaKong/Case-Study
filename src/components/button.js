var React = require('react');

var Button = React.createClass({
  render: function() {
    var purchasingChannelCode= this.props.singlePurchasingChannelCode;
    var PickUpInStore;
    var AddToCart;
    if(purchasingChannelCode == "0" || purchasingChannelCode == "2"){
        PickUpInStore = <button type="button" className="btn btn-secondary btn-lg">Pick up in Stroe</button>
    }
    if(purchasingChannelCode == "0" || purchasingChannelCode == "1"){
        AddToCart = <button type="button" className="btn btn-primary btn-lg">Add to Cart</button>
    }
    return(
        
        <section className="btn-section">
            {PickUpInStore}
            {AddToCart}
            <a className="col-md-6 col-xs-12 link-instore">find in a store</a>
            <div className="return">
                <span className="return-title">returns</span> 
                <span className="return-content">This item must be returned within 30 days of the ship date. See <a>return policy</a> for details. Prices, promotions, styles, and availability may vary by store and online.</span>
            </div>
            <button type="button" className="btn btn-default">Add to Registry</button>
            <button type="button" className="btn btn-default">Add to List</button>
            <button type="button" className="btn btn-default btn-share">Share</button>
        </section>
    ) // return
  } // render
}); //Button

module.exports = Button;
