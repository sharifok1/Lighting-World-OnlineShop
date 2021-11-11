import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import "./Navigation.css"


const Navigation = () => {
  const {user, logOut}=useAuth()
  const logOutHandler =()=>{
    
    const logOuts = window.confirm('Are you sure you want to logout?');
    if(logOuts === true){
      logOut()
    }
    else{
      return
    }
    
  }
    return (
       <div>
          <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" 
        style={{backgroundColor:'#150254',paddingBottom:'20PX'}}>
          
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
            </IconButton>
            <Grid container>
        <Grid item xs={12} sm={3}>
        <Typography variant="h6" component="div" >
                Lighting World    
         </Typography>
        </Grid>
        <Grid item xs={12} sm={9} >
            <div className='navigation-response'>
                <NavLink to="/Home" className="navText">Home</NavLink>
                <NavLink to="/AllProduct" className="navText">Poducts</NavLink>
              {
                user.email?
                  <>
                    <NavLink to="/Dashboard" className="navText">Dashboard</NavLink>
                    <small style={{backgroundColor:"#fff",color:"#000", padding:'2px',borderRadius:'5px'}}>
                      {user.displayName}</small>
                    <Button onClick={logOutHandler}><img className="logOut-ico" src="https://i.ibb.co/mXHQxyL/logout-ico.png" alt="" /></Button>
                 </>:
                <NavLink to="/Login" className="navText">Login</NavLink>
              }  
            </div>
    
        </Grid>
        </Grid>
           
          </Toolbar>
        </AppBar>
      </Box>
       </div>
      
    );
};

export default Navigation;
