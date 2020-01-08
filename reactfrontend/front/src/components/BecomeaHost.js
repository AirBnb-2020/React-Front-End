// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';

// // https://airbnb-2020.herokuapp.com/api/auth/register
// const BecomeaHost = ({ errors, touched, values, handleSubmit, status }) => {
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
//                 name="first name"
//                 placeholder="First Name"/>
//                 {touched.name && errors.firstname && (
//                 <p className="error">{errors.firstname}</p>
//                     )}
//                 <Field className="field"
//                 type="text"
//                 name="last name"
//                 placeholder="Last Name"/>
//                 {touched.name && errors.lastname && (
//                 <p className="error">{errors.firstname}</p>
//                     )}
//                      <Field className="field"
//                 type="text"
//                 name="street"
//                 placeholder="Street"/>
//                 {touched.name && errors.firstname && (
//                 <p className="error">{errors.street}</p>
//                     )}
//                      <Field className="field"
//                 type="text"
//                 name="city"
//                 placeholder="City"/>
//                 {touched.name && errors.firstname && (
//                 <p className="error">{errors.city}</p>
//                     )}
//                      <Field className="field"
//                 type="text"
//                 name="state"
//                 placeholder="State"/>
//                 {touched.name && errors.state && (
//                 <p className="error">{errors.state}</p>
//                 )}
//                     <Field className="field"
//                 type="text"
//                 name="zipcode"
//                 placeholder="Zip Code"/>
//                 {touched.name && errors.zipcode && (
//                 <p className="error">{errors.zipcode}</p>
//                     )}
//                      <Field className="field"
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"/>
//                 {touched.name && errors.phone && (
//                 <p className="error">{errors.phone}</p>
//                     )}
//                     <Field className="field"
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     />
//                 {touched.email && errors.email && (
//                 <p className="error">{errors.email}</p>
//                     )}
//                <Field 
//                 className="ui selection dropdown"
//                 component="select"
//                 name="listing">

//                <option>Hosting Options</option>
//                <option value="House">House</option>
//                <option value="Apartment">Apartment</option>
//                <option value="Bed Breakfast">Bed & Breakfast</option>
               

//         </Field>
         
//             <Field className="field"
//                 type="text"
//                 name=" user name"
//                 placeholder="User Name"/>
//                 {touched.name && errors.firstname && (
//                 <p className="error">{errors.username}</p>
//                     )}

//            <Field className="field"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                     />
//                 {touched.password && errors.password && (
//                 <p className="error">{errors.password}</p>
//                 )}
//                 <label className="checkbox-container">

//                  <h3>I have read and agree to the Terms of Service</h3>

//                 <Field
//                  className="field"
//                 type="checkbox"
//                 name="serviceterms"
//                 checked={values.serviceterms}
//                     />
//              <span className="ui checkbox" />
//              </label>
//              <button className="ui button" type="submit">Submit</button>
//             </Form>
//             {users.map(user => (
//             <div>
//             <h1>{user.firstname}</h1>
//             <h1>{user.lastname}</h1>
//             <h1>{user.street}</h1>
//             <h1>{user.city}</h1>
//             <h1>{user.state}</h1>
//             <h1>{user.zipcode}</h1>
//             <h1>{user.listing}</h1>
//             <h1>{user.phone}</h1>
//             <h1>{user.email}</h1>
//             </div>
//  ))}
         
// </div>
//  )};
// const Host = withFormik({
//     mapPropsToValues({ firstname, lastname, street, city, state, zipcode, phone, email, listing, password, serviceterms }) {
//      return {
//             firstname: firstname || '',
//             lastname: lastname || '',
//             street: street || '',
//             city: city || '',
//             state: state || '',
//             zipcode: zipcode || '',
//             phone: phone || '',
//             email: email || '',
//             listing: listing || '',
//             password: password || '',
//             serviceterms: serviceterms || false
//         };
//     },
// validationSchema: Yup.object().shape({
//         firstname: Yup.string().required('Please enter your first name.'),
//         lastname: Yup.string().required('Please enter your last name.'),
//         street: Yup.string().required('Please enter your street.'),
//         city: Yup.string().required('Please enter your city.'),
//         state: Yup.string().required('Please enter your state.'),
//         zipcode: Yup.string().required('Please enter your zipcode.'),
//         phone: Yup.string().required('Please enter your phone.'),
//         email: Yup.string().email('This email is not valid.').required('Please enter your email address.'),
//         password: Yup.string().min(8, 'Your password must be at least 8 characters long.')
//         .required('Please enter a password.'),
//         serviceterms: Yup.boolean().test(
//          'is-true',
//         'Please agree to the terms of service to continue.',
//         value => value === true
// )
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
// })(BecomeaHost);
// export default Host;