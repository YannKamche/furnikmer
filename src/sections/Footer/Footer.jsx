import React from "react";
import "./Footer.css";
import { footer } from "../../constants/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <div className="bg-footer">
      <div className="footer-flex">
        <div className="footer1">
          <h2>{footer.title}</h2>
          <section>{footer.section}</section>
        </div>
        {footer.links.map((link, index) => (
          <div className="footer1" key={`link-${index}`}>
            <h2>{link.title}</h2>
            {link.links.map((item, itemIndex) => (
              <li key={`link-${index}-item-${itemIndex}`}>
                <a href="#">{item}</a>
              </li>
            ))}
          </div>
        ))}
        <div className="footer1">
          <h2>{footer.title2}</h2>
          <section>{footer.section2}</section>
          <div className="footer-logo">
            <img src={footer.image} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="copy">
        <section>
          copyright &copy; {currentYear} by <span>FurniKmer</span>
        </section>
      </div>
    </div>
  );
};

export default Footer;
