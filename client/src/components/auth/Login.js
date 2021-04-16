import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './Login.css';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if(isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
      <div className = "overlay">
        <center className = "makeCenter">
          <div className = "boxLogin">
              <h1 className = "headLogin">Log In</h1>

              <form onSubmit={(e) => onSubmit(e)}>
                <input className="fancyInput"
                  type="email"
                  placeholder="Email Address*"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />

                <input className="fancyInput"
                  type="password"
                  placeholder="Password*"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                />
                <input type="submit" value="LOGIN" className = "loginButton"/>
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
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
