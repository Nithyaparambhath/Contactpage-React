import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


function Form() {
    const [userDetails,setUserDetails] = useState({
        username:'',
        email:'',
        phone:''
    })
    const [isNameValid,setIsNameValid] =useState(true)
    const [isEmailValid,setIsEmailValid] = useState(true)
    const [isPhoneValid,setIsPhoneValid] = useState(true)

    
    const validateInput = (e)=>{
        console.log(e.target.value);
        const {name,value} =e.target
        if(!!value.match(/^[a-zA-Z]+$/)){
            setIsNameValid(true)
            setUserDetails({...userDetails,[name]:value})
        }else{
            setIsNameValid(false)
            setUserDetails({...userDetails,[name]:value})
        }
        
    }
    
    const validateEmailInput = (e)=>{
        console.log(e.target.value);
        const {name,value} =e.target
        if(!!value.match(/^[a-zA-Z0-9]{3,20}@gmail.com$/)){
            setIsEmailValid(true)
            setUserDetails({...userDetails,[name]:value})
        }else{
            setIsEmailValid(false)
            setUserDetails({...userDetails,[name]:value})
        }
        
    }

    const validatePhoneInput = (e)=>{
        console.log(e.target.value);
        const {name,value} =e.target
        if(!!value.match(/^[0-9]*\.?[0-97]+$/)){
            setIsPhoneValid(true)
            setUserDetails({...userDetails,[name]:value})
        }else{
            setIsPhoneValid(false)
            setUserDetails({...userDetails,[name]:value})
        }
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
       if(userDetails.username==="" || userDetails.email==="" || userDetails.phone==="" ){
        setIsNameValid(false)
        setIsEmailValid(false)
        setIsPhoneValid(false)
       }
     
        else{
            alert("Form Successfully Submited")
            
        }
    }
   

 
  return (
    <div>
         <h1 style={{fontWeight:'700'}} className='text-dark fs-2'> Contact Us</h1>
        <form  onSubmit={handleSubmit}>
            <div className="form-field mt-5">
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" value={userDetails.name} name='username'    onChange={(e)=>{validateInput(e)}}/>
            
            </div>
            {
                !isNameValid &&
                <div className='text-danger mt-2'>Please Enter Valid User Name</div>
            }
            <div className="form-field mt-3">
            <TextField fullWidth id="outlined-basic" type='email' label="Email" variant="outlined" name='email' value={userDetails.email || ""}   onChange={(e)=>{validateEmailInput(e)}} />
            
            </div>

            {
                !isEmailValid &&
                <div className='text-danger mt-2'>Please Enter Valid Email Id</div>
            }
            <div className="form-field mt-3">
            <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined" name='phone' value={userDetails.phone || ""}    onChange={(e)=>{validatePhoneInput(e)}} />
            
            </div>

            {
                !isPhoneValid &&
                <div className='text-danger mt-2'>Please Enter Valid Phone Number</div>
            }
            <div className="form-field mt-3">
            <Button className='bg-warning' type='submit' fullWidth variant="contained">SEND</Button>
            
            </div>
           
        </form>
    
    </div>
  )
}

export default Form