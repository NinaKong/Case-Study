import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import '../styles/image-gallery.css'

class Carousel extends React.Component {
  handleImageLoad(event) {
  }

  render() {
    var singleimage = this.props.singleImage;
    var primaryImage = this.props.singlePrimaryImage;
    var imageGroup = [];
    var temp;
    var images = [];
    imageGroup[0] = primaryImage;
    for (var i = 0; i < singleimage.length; i++) {
      imageGroup[i+1] = singleimage[i].image;
    }
    for(var j =0; j < imageGroup.length; j++) {
      temp = {
        'original': imageGroup[j],
        'thumbnail': imageGroup[j]
      };
      images.push(temp);
    }
    return (
      <ImageGallery
        items={images}
        onImageLoad={this.handleImageLoad}/>
    );
  }
}
export default Carousel;
