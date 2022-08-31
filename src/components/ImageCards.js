import React from 'react'
import EachImage from './EachImage';
import NotFound from './NotFound';

const ImageCards = ({ results }) => {
  let images;
  let noImage;
  if (results.length > 0) {
    images = results.map(image => {
      let id = image.id;
      let title = image.alt_description;
      let url = `${image.urls.small}`;
      return <EachImage url={url} key={id} alt={title} />;
    });
  } else {
    noImage = <NotFound />;
  }

  return (
    <>
      <div className="card-list">
        {images}
      </div>

      {noImage}
    </>


  )
}

export default ImageCards