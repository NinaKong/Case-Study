import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/loader';
import Title from './components/title';
import Carousel from './components/carousel';
import StarRating from './components/Review/starRating';
import Overall from './components/Review/overall';
import DateFormat from './components/Review/dateFormat'
import ProReview from './components/Review/proReview';
import ConReview from './components/Review/conReview';
import Price from './components/price';
import Promotions from './components/promotions';
import NumericInputs from './components/numericInputs';
import Button from './components/button';
import Description from './components/description';
import './styles/style.css'

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      lading: true,
      itemTitle: [],
      itemPrimaryImage: [],
      itemImages: [],
      itemProReview: [],
      itemConReviewOverallRating: [],
      itemConReview: [],
      itemPrice: [],
      itemPromotions: [],
      itemPurchasingChannelCode: [],
      itemDescription: []
    } //return
  }, //getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./src/data/item-data.json', function(result) {
      var tempTitle = result.CatalogEntryView[0].title;
      var tempImages = result.CatalogEntryView[0].Images[0].AlternateImages;
      var tempPrimaryImage = result.CatalogEntryView[0].Images[0].PrimaryImage[0].image;
      
      var tempProReview = result.CatalogEntryView[0].CustomerReview[0].Pro;
      var tempConReviewOverallRating = result.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating;
      var tempConReview = result.CatalogEntryView[0].CustomerReview[0].Con;
     
      var tempPrice = result.CatalogEntryView[0].Offers[0].OfferPrice;
      var tempPurchasingChannelCode = result.CatalogEntryView[0].purchasingChannelCode;
      var tempPromotions = result.CatalogEntryView[0].Promotions;
      var tempDescription = result.CatalogEntryView[0].ItemDescription[0].features;
      this.setState({
        itemTitle: tempTitle,
        itemPrimaryImage: tempPrimaryImage,
        itemImages: tempImages,
        itemProReview: tempProReview,
        itemConReviewOverallRating: tempConReviewOverallRating,
        itemConReview: tempConReview,
        itemPrice: tempPrice,
        itemPurchasingChannelCode: tempPurchasingChannelCode,
        itemPromotions: tempPromotions,
        itemDescription: tempDescription
      }); //setState
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {

    var filteredTitle = this.state.itemTitle;
    
    var filteredPrimaryImage = this.state.itemPrimaryImage;
    
    var filteredImages = this.state.itemImages;
    
    var filteredProReview = this.state.itemProReview;
    filteredProReview = filteredProReview.map(function(item, index) {
      return(
          <ProReview key = { index }
            singleProReview = { item } />
      ) //return
    }.bind(this)); //filteredProReview.map
    
    var filteredConOverallRating = this.state.itemConReviewOverallRating;
      
    var filteredConReview = this.state.itemConReview;
    filteredConReview = filteredConReview.map(function(item, index) {
      return(
          <ConReview key = { index }
            singleConReview = { item } />
      ) //return
    }.bind(this)); //filteredConReview.map
    
    var filteredItemPrice = this.state.itemPrice;
    filteredItemPrice = filteredItemPrice.map(function(item, index) {
      return(
          <Price key = { index }
            singleItemPrice = { item } />
      ) //return
    }.bind(this)); //filteredItemPrice.map
    
    var filteredPurchasingChannelCode = this.state.itemPurchasingChannelCode;
    
    var filteredItemPromotions = this.state.itemPromotions;
    filteredItemPromotions = filteredItemPromotions.map(function(item, index) {
      return(
          <Promotions key = { index }
            singleItemPromotions = { item } />
      ) //return
    }.bind(this)); //filteredItemPromotions.map

    var filteredItemDescription = this.state.itemDescription;
    filteredItemDescription = filteredItemDescription.map(function(item, index) {
      return(
        <Description key = { index }
          singleItemDescription = { item } />
      ) //return
    }.bind(this)); //filteredItemDescription.map
    
    return (
      <div className="container">
        <div className="col-md-6">
          <Title singleTitle = {filteredTitle}/>
          <Carousel singleImage = {filteredImages} singlePrimaryImage = {filteredPrimaryImage}/>
        </div>
        <div className="col-md-6">
          {filteredItemPrice}
          <section className="promotions">{filteredItemPromotions}</section>
          <NumericInputs />
          <Button singlePurchasingChannelCode={filteredPurchasingChannelCode}/>
          <section>
            <h3>Product Hightlight</h3>
            <ul className="item-description">{filteredItemDescription}</ul>
          </section>
        </div>
        <div className="col-md-6">
          <Overall />
          <section className="rating">
            {filteredProReview}
            {filteredConReview}
          </section>
        </div>
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('MainBody')
); //render


