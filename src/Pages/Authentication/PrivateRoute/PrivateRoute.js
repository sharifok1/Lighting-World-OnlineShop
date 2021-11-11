import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}= useAuth();
    if(isLoading===true){
        return <Box sx={{mt:10}}><CircularProgress disableShrink /></Box>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;