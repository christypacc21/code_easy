import axios from 'axios';
// import { SERVER_URL } from '../config';

import {
    LOGIN,
    LOGIN_FAIL,
    LOGOUT,
    INSTRUCTOR_SIGNUP,
    INSTRUCTOR_SIGNUP_FAIL
} from '../reducers/constants';
const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function localSignup(displayName, email, password, role) {
    return async dispatch => {
        const response = await axios.post(SERVER_URL + '/api/signup', {
            displayName,
            email,
            password,
            role
        });

        console.log('res', response);
        if (response.data) {
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: LOGIN,
                payload: response.data
            });
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    };
}

export function loginByEmail(email, password) {
    return async dispatch => {
        const { data } = await axios.post(SERVER_URL + '/api/login', {
            email,
            password
        });

        console.log('response: ', data);

        if (data) {
            dispatch({
                type: LOGIN,
                payload: data
            });
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    };
}

export function loginByFacebook(access_token, role) {
    return async dispatch => {
        const { data } = await axios.post(SERVER_URL + '/api/login/facebook', {
            access_token,
            role
        });

        console.log('response: ', data);

        if (data) {
            dispatch({
                type: LOGIN,
                payload: data
            });
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
        }
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({
            type: LOGOUT
        });
    };
}

export function updateInstructorProfile(
    introduction,
    education,
    yearCodeExp,
    filePath,
    skills
) {
    return async dispatch => {
        const token = localStorage.getItem('token');
        console.log('token: ' + token);
        const config = { headers: { 'Authorization': 'Bearer ' + token } };
        console.log('url: ', SERVER_URL + '/api/instructor/signup');
        const { data } = await axios.post(SERVER_URL + '/api/instructor/signup', {
            introduction,
            education,
            yearCodeExp,
            filePath,
            skills
        }, config);

        console.log('response: ', data);

        if (data) {
            dispatch({
                type: INSTRUCTOR_SIGNUP,
                payload: data
            });
        } else {
            dispatch({
                type: INSTRUCTOR_SIGNUP_FAIL
            });
        }
    };
}