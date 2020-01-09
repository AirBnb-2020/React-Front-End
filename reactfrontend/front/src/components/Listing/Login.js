import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';

// https://airbnb-2020.herokuapp.com/api/auth/register
const Login = ({ errors, touched, values, handleSubmit, status }) => {
        const [users, setUsers] = useState([]);
        console.log(users);
     useEffect(() => {
        if (status) {
            setUsers([...users, status]);
}
}, [status]);
console.log(status);

        return (
            <div className="ui container1">
            <h1>Login</h1>
                <Form className="ui form1">
                <Field className="field1"
                type="text"
                name="username"
                placeholder="Username"/>
                {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
                    )}
                <Field className="field1"
                  type="password"
                  name="password"
                  placeholder="Password"
                    />
                {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
                )}

             <button className="ui button1" type="register">Submit</button>
             <br></br>
             <button className="ui button1" type="home"><Link to="/"> Home </Link></button>
            
            </Form>
            
            {users.map(user => (
            <div>
            <h1>{user.username}</h1>
            <h1>{user.password}</h1>
            
            </div>
 ))}
        
</div>
 )};
 const LoginCredentials = withFormik({
    mapPropsToValues({ username, password, serviceterms }) {
     return {
            username: username || '',
            password: password || '',
            serviceterms: serviceterms || false
        };
    },
validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter your full name.'),
        email: Yup.string().email('This email is not valid.').required('Please enter your email address.'),
        password: Yup.string().min(8, 'Your password must be at least 8 characters long.')
        .required('Please enter a password.'),
        serviceterms: Yup.boolean().test(
         'is-true',
        'Please agree to the terms of service to continue.',
        value => value === true
)
}),
        handleSubmit(values, { setStatus }) {
        axios
        .post('https://reqres.in/api/users/', values)
        .then(res => {
        setStatus(res.data);
    })
        .catch(error => console.log(error.response));
}
})(Login);
export default LoginCredentials;

export {Login}; 