import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {  NavLink } from 'react-router-dom';
import "./Navigation.css"


const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Grid container>
        <Grid item xs={12} sm={3}>
        <Typography variant="h6" component="div" >
                Lighting World    
         </Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
            <div>
                <NavLink to="/Home" className="navText">Home</NavLink>
                <NavLink to="/AllProduct" className="navText">Poducts</NavLink>
                <NavLink to="/Dashboard" className="navText">Dashboard</NavLink>
                <NavLink to="/Login" className="navText">Login</NavLink>
            </div>
    
        </Grid>
        </Grid>
           
          </Toolbar>
    
        </AppBar>
      </Box>
    );
};

export default Navigation;