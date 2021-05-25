import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '././layoutImg/mainImg.jpg';
import './Landing.css';
export const Landing = () => {
  return (
    <div className = "body">

        <div className = "leftSide">
          <img src = {photo1}/>
        </div>

        <center>
          <div className = "rightSide">
              <h1 className = "headLanding">Connecture</h1>

              <h3 className = "intro">
                  A simple social platform to enhance the tech culture of your college. 
                  Build new connections, meet up, and grow with Connecture!
              </h3>
                
              <div className = "link">
                  <Link to="/register" className = "link1">SIGN UP</Link>
                  <Link to="/login" className = "link2">LOGIN</Link>
              </div>
          </div>
        </center>

        <div className="clear"></div>

    </div>
  );
};