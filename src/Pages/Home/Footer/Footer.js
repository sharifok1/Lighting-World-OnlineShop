
import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="foter-style">
                <Grid container spacing={2} className="m-0">
                <Grid item xs={12} md={3}>
                        <h3>Lighting World</h3>
                      <p> Road-9/B, Sector-5, Uttara, Dhaka</p> 
                      <p> Official: lightingworld@gmail.com</p> 
                      <p> Help line: 01851515***</p> 
                      </Grid>
                        <Grid item xs={12} md={3}>
                        <h4>About Us</h4>
                        <p>Our Success</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        </Grid>
                    <Grid item xs={12} md={6}><h4>Pay With</h4>
                        <img className="img-fluid payment-card" src="https://utshobbd.com/wp-content/uploads/2019/12/payment.jpg" alt="" />
                        </Grid>
                    
                </Grid>
                <p className="foter-txt">Copyright © 2021 BDtravel Agency Service</p>
            </footer>
        </div>
    );
};

export default Footer;