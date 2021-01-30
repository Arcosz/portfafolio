import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Banner = () => {
  const [state] = React.useState({
    title: "Hola, Soy David Arcos",
    text:
      "Ingeniero en Desarrollo de Software",
    image: "/images/perfil.jpg",
  });
  const redirectSN = (url) => {
    window.open(url, '_blank');
  }
  return (
    <header className="header-site">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section typewriter">
                <ul className="header__ul">
                  <li onClick={() => redirectSN('https://www.facebook.com/Arcosz')}>
                    <FaFacebookF className="headerIcon"/>
                  </li>
                  <li onClick={() => redirectSN('https://twitter.com/DavidArcosz')}>
                    <FaTwitter className="headerIcon"/>
                  </li>
                  <li onClick={() => redirectSN('https://www.linkedin.com/in/david-arcos-82a04819a/')}>
                    <FaLinkedin className="headerIcon" />
                  </li>
                  <li onClick={() => redirectSN('https://www.instagram.com/arcos_david/')}>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                {/* <div className="header__buttons">
                  <a href="/#" className="btn btn-outline">
                    My Portfolio
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <Image src={state.image} fluid circular />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
