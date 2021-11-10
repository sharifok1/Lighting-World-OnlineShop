import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Topbanner.css"
const Topbanner = () => {
    return (
         <div className="banner-img">
                 <div className="topbanner">
            
                 <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Box sx={{m:5}} className="descrip">
                    Buy Decoration light at best price in <br/> 
                    Bangladesh, Modern and trending wall light, <br/>
                    led strip, handing light up to 40% discount.
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                       <Box sx={{mb:20}}>
                       <Box className="hotOffer" sx={{mb:4}}>
                        <h1>Winter Offer <br/> <span className="fifty">50% </span>discount <br/> going On
                        </h1>
                       </Box>
                       <NavLink to="/AllProduct">
                       <span className="banner-btn">See More Product</span>
                       </NavLink>
                       </Box>
                    </Grid>
                    </Grid>
           <div>  
           </div>
        </div>
        </div>
    );
};

export default Topbanner;

