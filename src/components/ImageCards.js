import React from 'react'
import EachImage from './EachImage';
import NotFound from './NotFound';

const ImageCards = ({ results }) => {
  let images;

  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <EachImage url={url} key={id} alt={title} />;
    });
  } else {
    images = <NotFound />;
  }

  return (
    <>
      {images}
    </>
  )
}

export default ImageCards