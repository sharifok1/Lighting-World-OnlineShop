import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './Registration.css'

const Registration = () => {
  const { createAccount ,firebaseError, successMsg, user}=useAuth();
  const history = useHistory()

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    if(data.password !==data.retypePassword){
      alert("re-type password din't matched")
      return 
    }
    createAccount(data.email, data.password, data.name, history)
    console.log(data.email,data.name, data.password);
  }
////email, password, name, history
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{mt:10}}>
            <h3>Please create an account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Box className="input-field">
                <input className="reg-filed" {...register("name")} placeholder="your full name" required/>
                <input className="reg-filed" {...register("email")} placeholder="email" type="email" required/>
                <input className="reg-filed" {...register("password")} placeholder="password" required/>
                <input className="reg-filed" {...register("retypePassword")} placeholder="re-type password" />    
                <input className="reg-btn" type="submit" value="Signup" />
               </Box>
               {
                 user.email? <p>{successMsg}</p>
                 :
                 <p>{firebaseError}</p>
               }
                </form>
                <h3>***Already have an account?***</h3>
                <h2>Please click on <NavLink to="/login"> <Button>Login</Button></NavLink> </h2>
          </Grid>
          <Grid item xs={12} md={6}>
                <img src="https://i.ibb.co/nCbPJkM/reg.png" alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Registration;