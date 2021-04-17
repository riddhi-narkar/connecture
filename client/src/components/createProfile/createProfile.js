// import React, { Fragment, useState } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { setAlert } from '../../actions/alert';
// import { createProfile } from '../../actions/auth';
// import PropTypes from 'prop-types';
// import './createProfile.css';

// const Create_profile = ({ setAlert, createProfile, isAuthenticated }) => {

//   const [formData, setFormData] = useState({
//     uName: '',
//     year: '',
//     bio: '',
//     linkedin: '',
//     github: '',
//   });       // created a state

//   const { uName, year, bio, linkedin, github } = formData;  //formed an object and assigned it to formData

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value 
//         // year: e.target.value 
//     });

//     // <...objectname -> this is destructuring in react 

//   const onSubmit = async e => {
//     e.preventDefault();
//     createProfile({ uName, year, bio, linkedin, github});
//   };

//   return (
//     <Fragment>
//       <div className = "overlayR">
//         <center className = "makeCenterR">
//           <div className = "boxRegister">
//             <h1 className = "headRegister">Profile</h1>

//                 <form onSubmit = {e => onSubmit(e)}>
//                     <label for = 'Year' className = "yearSelect">
//                         Select your current year
//                     </label>

//                     <select name = 'year' value = {year} onChange = {e => onChange(e)}>
//                         <option value = 'None'>None</option>
//                         <option value = 'FE'>FE</option>
//                         <option value = 'SE'>SE</option>
//                         <option value = 'TE'>TE</option>
//                         <option value = 'BE'>BE</option>
//                     </select>

//                     <input className="fancyInputR"
//                       type = "text" 
//                       placeholder = "Username*" 
//                       name = "uName" 
//                       value = {uName}
//                       onChange = {e => onChange(e)}
//                       />

//                     <input className="fancyInputR"
//                       type = "text" 
//                       placeholder = "Enter a short bio*" 
//                       name = "bio" 
//                       value = {bio}
//                       size = "20"
//                       onChange = {e => onChange(e)}
//                       />

//                     <input className="fancyInputR"
//                       type = "url" 
//                       placeholder = "Enter LinkedIn profile url*" 
//                       name = "linkedin"
//                       value = {linkedin}
//                       onChange = {e => onChange(e)}
//                       />

//                     <input className="fancyInputR"
//                       type = "url" 
//                       placeholder = "Enter Github profile url*" 
//                       name = "github"
//                       value = {github}
//                       onChange = {e => onChange(e)}
//                       />

                    
//                     <input type="submit" value="Create Profile" className="registerButton" />
//                 </form>
//           </div>
//         </center>
//       </div>
//     </Fragment>
//   );
// };

// Create_profile.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   createProfile: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// }

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { setAlert, createProfile })(Create_profile);

// // mapStateToProps is a library 
