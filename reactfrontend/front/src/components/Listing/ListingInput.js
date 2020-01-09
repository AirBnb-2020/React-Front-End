import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import './ListingInput.css';
const ListingInput = ({ errors, touched, values, handleSubmit, status }) => {
        const [users, setUsers] = useState([]);
        console.log(users);
     useEffect(() => {
        if (status) {
            setUsers([...users, status]);
}
}, [status]);
console.log(status);

        return (
            <div className="ui container">
            <h1>Start Listing Your Space</h1>
                <Form className="ui form3">
               
                <Field 
                    className="ui selection dropdown3"
                    component="select"
                    name="Room Type">

                    <option>Neighbourhood</option>
                    <option value="">Friedrichshain-Kreuzberg</option>
                    <option value="">Mitte</option>
                    <option value="">Pankow</option>
                    <option value="">Neukölln</option>
                    <option value="">Charlottenburg-Wilm</option>
                    <option value="">Tempelhof - Schöneberg</option>
                    <option value="">Lichtenberg</option>
                    <option value="">Treptow - Köpenick</option>
                    <option value="">Steglitz - Zehlendorf</option>
                    <option value="">Reinickendorf</option>
                    <option value="">Spandau</option>
                    <option value="">Marzahn - Hellersdorf</option>


                </Field>
                
                <Field 
                    className="ui selection dropdown3"
                    component="select"
                    name="Bedrooms">

                    <option>Room Type</option>
                    <option value="">Home</option>
                    <option value="">Apartment</option>
                    <option value="">Private Room</option>
                    <option value="">Shared Room</option>

                </Field>

               <Field 
                    className="ui selection dropdown3"
                    component="select"
                    name="Bedrooms">

                    <option>Bed Type</option>
                    <option value="">Real Bed</option>
                    <option value="">Pull-out Sofa</option>
                    <option value="">Futon</option>
                    <option value="">Couch</option>
                    <option value="">Airbed</option>

                </Field>
         
                <Field className="field3"
                type="text"
                name=""
                placeholder="Accommodates"/>
                <Field
                 className="field3"
                type="checkbox"
                name=""
                checked={values.serviceterms}
                    />
                {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
                    )}
                  <Field className="field3"
                type="text"
                name=""
                placeholder="Family Kid Friendly"/>
                <Field
                 className="field3"
                type="checkbox"
                name=""
                checked={values.serviceterms}
                    />
                {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
                    )}
                <Field className="field3"
                type="text"
                name="accomadates"
                placeholder="Accomadates"/>
                {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
                    )}
                
                <Field className="field3"
                type="text"
                name="minimumnights"
                placeholder="Minimum Nights"/>
                {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
                    )}
                
                <Field className="field3"
                type="text"
                name="cleaningfee"
                placeholder="Cleaning Fee"/>
                {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
                    )}
                
                <Field className="field3"
                type="text"
                name="securitydeposit"
                placeholder="Security Deposit"/>
                {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
                    )}
                    
                 
            <label className="checkbox-container3">

                 <h3></h3>
{/* 
                <Field
                 className="field3"
                type="checkbox"
                name=""
                checked={values.serviceterms}
                    /> */}
                   
                  
             <span className="ui checkbox3" />
             </label>
             <button className="ui button3" type="register">Submit</button>
             <br></br>
             <button className="ui button3" type="home"><Link to="/"> Home </Link></button>
            
             
            </Form>
            {users.map(user => (
            <div>
            <h1>{user.name}</h1>
            <h1>{user.role}</h1>
            <h1>{user.email}</h1>
            </div>
 ))}
         
</div>
 )};
const Listing = withFormik({
    mapPropsToValues({ name, email, role, password, serviceterms }) {
     return {
            name: name || '',
            email: email || '',
            role: role || '',
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
})(ListingInput);
export default Listing;

export {ListingInput}; 