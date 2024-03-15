import React from "react";
import "./Contact.css";
import { footerImage } from "../../constants/constants";
import { insta } from "../../assets";

const Image = ({ src }) => (
  <div className="image1">
    <img src={src} alt="" />
    <div className="insta">
      <img src={insta} alt="" />
    </div>
  </div>
);

const Contact = () => (
  <div className="footer-image" id="contact">
    {footerImage.map((image, index) => (
      <Image key={index} src={image} />
    ))}
  </div>
);

export default Contact;
