import React from "react";

function ImageContainer(props) {
  return (
    <div className="imageContainer">
      <img src={props.image} alt="NASA pic of Space" />
    </div>
  );
}

export default ImageContainer;