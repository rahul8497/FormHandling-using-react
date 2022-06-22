import React,{useEffect, useState} from 'react'
import Validation from './Validation';
const SignupForm = ({submitForm}) => {

    const[values,setValues]=useState({
        fullname:"",
        email:"",
        password:""
    })
    const[errors,setErrors]=useState({});
    const[dataIsCorrect,setDataIsCorrect]=useState(false);
    const hanlder=(e)=>{
        setValues({...values,[e.target.name] : e.target.value});
    }
   const handleFormSubmit=(e)=>{
    e.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
   }
   useEffect(()=>{
    if(Object.keys(errors).length===0 && dataIsCorrect){
        submitForm(true);
    }
   },[dataIsCorrect,submitForm,errors]);
  return (
    <div className='container'>
        <div className="app-wrapper">
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form action="" className='form-wrapper'>
                <div className="name">
                    <label className='label'>Full Name</label>
                    <input type="text" className='input' value={values.fullname} name='fullname' onChange={hanlder}/>
                    {errors.fullname && <p className='error'>{errors.fullname}</p>}
                </div>
                <div className="email">
                    <label className='label'>Email</label>
                    <input type="email" className='input' value={values.email} name='email' onChange={hanlder}/>
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className="password">
                    <label className='label'>Password</label>
                    <input type="password" className='input' value={values.password} name='password' onChange={hanlder}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div>
                    <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignupForm;
