import React from "react";
import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const About = () => {
  const [header] = React.useState({
    subHeader: "Acerca de mí",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  return (
    <div id="About" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <Image src='/images/perfil2.jpg' size='medium' circular />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Apasionado por la tecnología</h1>
              <div className="about__info-p1">
                Soy un desarrollador de software, tanto frontend como backend, apasionado por seguir aprendiendo nuevas cosas día a día. <br/>
                Un trabajo no es trabajo mientras lo que haces te encanta, por lo que siempre trato de dar la mejor experiencia en todos mis proyectos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
