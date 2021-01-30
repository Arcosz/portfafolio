import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaHeart,
  FaReact
} from "react-icons/fa";
const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaLinkedin className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>
            <p className="footer-text">
              © 2021 Todos los Derechos Reservados por Arcos. Este sitio fue creado con <FaReact />
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
