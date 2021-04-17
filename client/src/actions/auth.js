import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from './types';
import setAuthToken from '../utils/setAuthToken'

// Load User
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try{
        const res = await axios.get('/api/auth'); // get is backend to frontend
    
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
} 

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try{
        const res = await axios.post('/api/users', body, config);  // post is sending frontend to backend

        dispatch({
            type: REGISTER_SUCCESS, // reducers (returns a boolean value)
            payload: res.data
        });

        dispatch(loadUser());   // loads to the user page after registering
    } 
    catch(err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg)))
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// //Create Profile
// export const createProfile = ({ uName, year, bio, linkedin, github }) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     const body = JSON.stringify({ uName, year, bio, linkedin, github });

//     try{
//         const res = await axios.post('/api/profile', body, config);  // post is sending frontend to backend

//         dispatch({
//             type: REGISTER_SUCCESS, // reducers (returns a boolean value)
//             payload: res.data
//         });

//         dispatch(loadUser());   // loads to the user page after registering
//     } 
//     catch(err) {
//         const errors = err.response.data.errors;

//         if(errors) {
//             errors.forEach(error => dispatch(setAlert(error.msg)))
//         }

//         dispatch({
//             type: REGISTER_FAIL
//         });
//     }
// }

// Login User
export const login = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try{
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch(err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg)))
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout
export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE});
    dispatch({ type: LOGOUT});
}