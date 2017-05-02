import React from 'react';
import '../styles/loader.css'

var Loader = React.createClass({
  render: function() {
    return(
        <section>
            <div className="blob blob-0"></div>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
            <div className="blob blob-4"></div>
            <div className="blob blob-5"></div>
        </section>
    ) // return
  } // render
}); //Loader

module.exports = Loader;