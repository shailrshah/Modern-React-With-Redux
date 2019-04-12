import React from "react";

const ImageList = props => {
  console.log(props.images);
  const images = props.images.map(image => (
    <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
  ));
  return (
    <div>
      {props.images.length > 0 && <h1>{props.images.length} images found.</h1>}
      <div>{images}</div>
    </div>
  );
};

export default ImageList;
