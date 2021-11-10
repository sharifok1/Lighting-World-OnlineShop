import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Login = () => {
    const { passwordLogin,firebaseError, user}=useAuth();
  const history = useHistory()

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    passwordLogin(data.email, data.password, data.name, history)
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{mt:10}}>
            <h3>Please create an account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

               <Box className="input-field">  
                <input className="reg-filed" {...register("email")} placeholder="email" type="email" required/>
                <input className="reg-filed" {...register("password")} placeholder="password" required/>   
                <input className="reg-btn" type="submit" value="Login" />
               </Box>
               {
                 user.email? <p>Successfully Logedin</p>
                 :
                 <p>{firebaseError}</p>
               }
                </form>
                <h3>***I haven't account?***</h3>
                <h2>Please click on <NavLink to="/Registration"> <Button>Create Account</Button></NavLink> </h2>
          </Grid>
          <Grid item xs={12} md={6}>
               <img src="https://i.ibb.co/xX0YG7g/login.png" alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Login;