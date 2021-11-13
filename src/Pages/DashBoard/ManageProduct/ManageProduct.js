import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css'

const ManageProduct = () => {
    const [products,setProducts]=useState([]);
    const [num,setNum]=useState(0);
    useEffect(()=>{
        const url='https://blooming-basin-45530.herokuapp.com/allProducts';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[num])
    const productDltHandler=(id)=>{
        const url = `https://blooming-basin-45530.herokuapp.com/allProducts/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                setNum(num=>num+1)
                alert('You successfully deleted this product')
            }
        })
    }
    return (
        <div>
            {
                products.map(product=><div key={product._id}
                className='manage-product-card'
                >
                  <Grid container spacing={2}>
                    <Grid item xs={4} md={3} lg={2}>
                        <img className='productImg' src={product.img} alt="productphoto" />
                    </Grid>
                    <Grid item xs={8} md={5} lg={6}>
                      <h3>{product.Name}</h3>
                      <h3>Price:${product.Price}</h3>
                    
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} className='btn-position'>
                       <button onClick={()=>productDltHandler(product._id)} className='delete-btn'>Delete</button>
                    </Grid>
                    </Grid> 
                </div>)
            }
        </div>
    );
};

export default ManageProduct;

//http://localhost:3020/allProducts