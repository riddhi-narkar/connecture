import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import './Register.css';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className = "overlayR">
        <center className = "makeCenterR">
          <div className = "boxRegister">

            <h1 className = "headRegister">Sign Up</h1>
            <p className = "account">
              <i className = "fas fa-user" /> Create Your Account
            </p>

            <form className = "form" onSubmit={onSubmit}>
              <div className = "fancyInputR">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>

              <div className = "fancyInputR">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className = "fancyInputR">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <div className = "fancyInputR">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                />
              </div>

              <input type="submit" className = "registerButton" value="Register" />

            </form>
          </div>
        </center>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
