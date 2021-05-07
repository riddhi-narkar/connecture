import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './Login.css';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className = "overlay">
        <center className = "makeCenter">
          <div className = "boxLogin">
            <h1 classname = "headLogin">Log In</h1>

          <p className = "welcome">
            <i className = "fas fa-user" /> Welcome back!
          </p>

          <form className = "form" onSubmit={onSubmit}>
            <div className = "fancyInput">

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>

            <div className = "fancyInput">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
              />
            </div>
            
            <input type="submit" className = "loginButton" value="Login" />
          </form>
          </div>
        </center>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
