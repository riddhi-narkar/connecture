import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: { isAuthenticated, loading}, logout }) => {
  const authLinks = (
    <ul>
        <li>
          <a onClick={logout} href='#!'>Logut</a>
        </li> 
      </ul>
  );

  const guestLinks = (
    <ul>
        <li>
          <Link to ="/register">Register</Link>
        </li>
        <li>
          <Link to ="/login">Login</Link>
        </li>
      </ul>
  );
  
    return (
    <nav>
      <h1>
        <Link to ="/"> Connecture </Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
  );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
 });

export default connect(mapStateToProps, { logout })(Navbar);