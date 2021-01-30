import React from "react";
import {Link} from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { Image } from 'semantic-ui-react'
const Nav = () => {
  const [state, setState] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <Image src="/images/logo.png" size='mini' verticalAlign='middle' />
            </div>
          </ul>
            <ul className= { state ? 'navbar__right sidebar-new':'navbar__right'}>
              <li>
                <Link to="/">
                  Inicio
                </Link>
              </li>
              {/* <li>
                <a href="#Service">Gaming</a>
              </li> */}
            </ul>
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;

