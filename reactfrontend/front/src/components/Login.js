// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';

// // https://airbnb-2020.herokuapp.com/api/auth/register
// const Login = ({ errors, touched, values, handleSubmit, status }) => {
//         const [users, setUsers] = useState([]);
//         console.log(users);
//      useEffect(() => {
//         if (status) {
//             setUsers([...users, status]);
// }
// }, [status]);
// console.log(status);

//         return (
//             <div className="ui container">
//             <h1>Become a Host</h1>
//                 <Form className="ui form">
//                 <Field className="field"
//                 type="text"
//                 name="username"
//                 placeholder="Username"/>
//                 {touched.username && errors.username && (
//                 <p className="error">{errors.username}</p>
//                     )}
//                 <Field className="field"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                     />
//                 {touched.password && errors.password && (
//                 <p className="error">{errors.password}</p>
//                 )}

//              <button className="ui button" type="register">Submit</button>
//              <button className="ui button" type="register">Register</button>
            
//             </Form>
            
//             {users.map(user => (
//             <div>
//             <h1>{user.username}</h1>
//             <h1>{user.password}</h1>
//             </div>
//  ))}
         
// </div>
//  )};
// const LoginCredentials = withFormik({
//     mapPropsToValues({ username, password }) {
//      return {
//             username: username || '',
//             password: password || ''
//         };
//     },
// validationSchema: Yup.object().shape({
//         username: Yup.string().required('Please enter your username.'),
//         password: Yup.string().min(8, 'Your password must be at least 8 characters long.')
//         .required('Please enter a password.'),     
// }),
//         handleSubmit(values, { setStatus }) {
//             if (values.users === "React Dev") {
//                 setErrors({ users: "Sorry email is already taken. Reset Password?" });
//             } else {
//         axios
//         .post('https://airbnb-2020.herokuapp.com/api/auth/register', values)
//         .then(res => {
//         setStatus(res.data)
//         props.setToken(res.data.token);

//         resetForm();
//         setSubmitting(false);
// })
// .then(props)
//         .catch(error => console.log(error.response));
// }
//         }
// })(Login);
// export default LoginCredentials;