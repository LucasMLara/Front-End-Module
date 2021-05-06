import React from "react";

function ImageFnc(props) {
  const { source, alternativeText } = props;

  return (
    <>
      <img src={source} alt={alternativeText} />
    </>
  );
}


export default ImageFnc;