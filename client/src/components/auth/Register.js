import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords Do Not Match");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <div className = "overlayR">
        <center className = "makeCenterR">
          <div className = "boxRegister">
            <h1 className = "headRegister">Sign Up</h1>

                <form onSubmit = {e => onSubmit(e)}>
                    <input className="fancyInputR"
                      type = "text" 
                      placeholder = "Name*" 
                      name = "name" 
                      value = {name}
                      onChange = {e => onChange(e)}
                      />

                    <input className="fancyInputR"
                      type = "email" 
                      placeholder = "Email Address*" 
                      name = "email"
                      value = {email}
                      onChange = {e => onChange(e)}
                      />
                  
                    <input className="fancyInputR"
                      type=  "password"
                      placeholder = "Password*"
                      name = "password"
                      value = {password}
                      onChange = {e => onChange(e)} 
                    />
              
                    <input className="fancyInputR"
                      type = "password"
                      placeholder = "Confirm Password*"
                      name = "password2"
                      value = {password2}
                      onChange = {e => onChange(e)}
                    />
                    <input type="submit" value="REGISTER" className="registerButton" />
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
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
