import React from 'react';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaMinusCircle from 'react-icons/lib/fa/minus-circle';

var NumericInputs = React.createClass({
  getInitialState: function() {
    return {
      counter: 1
    };
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  
  decrement: function(){
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return (
    <section className="numeric">
      <label className="numeric-label">Quantity: </label>
      <FaMinusCircle className="numeric-btn-min" onClick = {this.decrement} />
      <input className="numeric-input" type="text" value={this.state.counter} onChange={()=>{}}/>
      <FaPlusCircle className="numeric-btn-plus" onClick = {this.increment} />
    </section>
  )}
});

module.exports = NumericInputs;