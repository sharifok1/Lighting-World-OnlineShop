import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './DisplayProduct.css';
import SixProduct from './SixProduct/SixProduct';


const DisplayProduct = () => {

    const [products,setProducts]=useState([]);
   
    useEffect(()=>{
        const url='https://blooming-basin-45530.herokuapp.com/allProducts';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
       <div style={{backgroundColor:'#e3e3e3'}}>
           <Container sx={{mt:10,mb:10}}>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
           {
            products.slice(0,6).map(product=><SixProduct
            key={product._id}
            product={product}
            ></SixProduct>)
           }
          </Grid>
          </Container>
       </div>
    );
};

export default DisplayProduct;
