import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import ExploreProduct from './ExploreProduct/ExploreProduct';

const AllProduct = () => {
    const [products,setProducts]=useState([]);
   
    useEffect(()=>{
        const url='https://blooming-basin-45530.herokuapp.com/allProducts';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div style={{backgroundColor:'#e3e3e3',marginTop:'-80px'}}>
            <div>
            <div>
           <Container sx={{mt:10,mb:10}}>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
           {
            products.map(product=><ExploreProduct
            key={product._id}
            product={product}
            ></ExploreProduct>)
           }
          </Grid>
          </Container>
       </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProduct;