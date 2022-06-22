import React,{useState} from 'react'
import SignupForm from './SignupForm'
import SignUpSuccess from './SignUpSuccess';
const Form = () => {
  const[formIsSubmitted,setFormIsSubmitted]=useState(false);
  const submitForm=()=>{
    setFormIsSubmitted(true);
  }
  return (
    <div>
        {!formIsSubmitted?<SignupForm submitForm={submitForm}/>:<SignUpSuccess/>}
    </div>
  )
}

export default Form