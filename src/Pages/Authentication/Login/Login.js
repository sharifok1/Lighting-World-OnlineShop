import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Login = () => {
    const { passwordLogin,firebaseError,user,googleLogin,}=useAuth();
  const history = useHistory();
  const location = useLocation();

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    passwordLogin(data.email, data.password, data.name, history, location)
  }

  const googleLoginHadler = ()=>{
    googleLogin(history,location);
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
                <hr />
                
                <h4>Signin with google</h4>
               
               {/* //google button---------------- */}
                <button sx={{border:1, bgcolor:'text.disabled',color:'white'
              }}
              onClick={googleLoginHadler}
                style={{
                  display:'flex',
                  margin:'auto',
                  cursor:"pointer",
                  paddingRight:'1px',
              }}
                >
                  <img style={{width:'40px',paddingTop:'5px',paddingRight:'5px'}} src="https://i.ibb.co/NZ1G7PQ/googleico.png" alt="" />
                   <Box sx={{bgcolor:'#42aaf5', fontSize:'20px'}}
                   style={{
                     padding:'10px 13px 15px 10px',
                     color:'#fff',
                   }}
                   >Signin with google </Box>
                </button>
          </Grid>
          <Grid item xs={12} md={6}>
               <img style={{ maxWidth:'320px',}} src="https://i.ibb.co/xX0YG7g/login.png" alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Login;