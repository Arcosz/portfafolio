import React from "react";
import { FaFrown } from "react-icons/fa";
import { Icon } from 'semantic-ui-react'

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
      <div className="common-notfound">
          <Icon className="icon-notfound" loading size='massive'>
            <FaFrown/>
          </Icon>
          <div className="commonBorder"></div>
        </div>
        <div className="common-notfound">
          <h1 className="mainHeader">Oops... Page not found</h1>
          <div className="commonBorder"></div>
        </div>
        
      </div> 
    </div>
  );
};

export default NotFound;
