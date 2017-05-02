var React = require('react');

var Price = React.createClass({
  render: function() {
    return(
      <section className="price">
          <span className="h2">{this.props.singleItemPrice.formattedPriceValue}</span>
          <span> {this.props.singleItemPrice.priceQualifier}</span>
      </section>
    ) // return
  } // render
}); //Price

module.exports = Price;