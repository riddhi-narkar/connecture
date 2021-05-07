import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import photo1 from './layoutImg/mainImg.jpg';
import './Landing.css';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

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
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
