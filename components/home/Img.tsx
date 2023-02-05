import React from "react";
import Image from "next/image";

export default function Img(props) {
  const { img, imgAlt, width, height, layout, objectFit } = props;
  const profile = require('../../public/static/projects/profile.jpg');
  var attributes = {
    width: width,
    height: height,
    objectFit: objectFit,
  };
  return (<Image src={profile} alt={imgAlt} {...attributes} priority layout='fill'/>);
}
