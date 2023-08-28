import React from 'react'
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';




function   Contact() {

  // const {title} =useParams();
  // const location=useLocation();
const navigate=useNavigate();
const initialValues = { username: "", email: "", password: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  valit(formValues)


};

useEffect(() => {

  if (Object.keys(formErrors).length === 0 ) {


  }
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  } 
  return errors;

};

const valit =(values)=>{
  if(values.email && values.username && values.password){
    setIsSubmit(true)

       }

}

  return (
    <> 
    <Navbar/>
<div className=' row conatact  bg-secondary text-center pb-4 ' style={{display:"flex",flexWrap:"wrap"}}>
    
       <div className='col-md-3'></div>
 
    <div className=' col-md-8 col-lg-6 text-center'>
      <form onSubmit={handleSubmit}>
        <h2 style={{marginTop:" 2rem",marginBottom:"2rem",color:"#f0e"}}>Sign In</h2>
         <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
            <input style={{fontSize:'1.3rem',padding:'.3rem',borderRadius:'5px',width:'60%'}}
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.username}</p>
          <div className="field">
            <input style={{fontSize:'1.3rem',padding:'.3rem',borderRadius:'5px',width:'60%'}}
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.email}</p>
          <div className="field">
            <input style={{fontSize:'1.3rem',padding:'.3rem',borderRadius:'5px',width:'60%'}}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.password}</p>
          <button className="fluid ui button blue" style={{backgroundColor:"#9E4",width:'60%',marginLeft:'8.3rem'}}> Submit </button>

        </div>

        </form>    
        {

   isSubmit &&(

     Swal.fire(  
    'ধন্যবাদ..',
    'Enroll Now.',
    'success'
    )) && navigate('/confirm')
 
    } 
            </div>
   <div className='col-md-2'>

   </div>
</div>

          </>
       
  )


}

export default Contact

