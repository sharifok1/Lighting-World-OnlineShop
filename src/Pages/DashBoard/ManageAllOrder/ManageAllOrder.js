import {Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageAllOrder.css'


const ManageAllOrder = () => {
    const [products,setProducts]=useState([]);
    const [num,setNum]=useState(0);
    useEffect(()=>{
        const url='https://blooming-basin-45530.herokuapp.com/userOrder';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[num])


    const CancelOrderDltHandler=(id)=>{
        const doYou = window.confirm('You are going to remove orderd')
        if(doYou){
            fetch(`https://blooming-basin-45530.herokuapp.com/userOrder/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                setNum(num=>num+1)
                alert('You successfully canceled your order')
            }
        })
        }
        
    }
    return (
        <div>
            {
                products.map(product=><div key={product._id}
                className='manage-order-card'
                >
                  <Grid container spacing={2}>
                    <Grid item xs={4} md={3} lg={2}>
                        <img className='productImg' src={product.img} alt="productphoto" />
                    </Grid>
                    <Grid item xs={8} md={5} lg={6}>
                      <h3>{product.name}</h3>
                      <h3>Cost:${product.total}</h3>
                      
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} className=''>
                    user:{product.email}
                       <button onClick={()=>CancelOrderDltHandler(product._id)} className='manageOrderbtn'>Accept Order</button>
                       <button onClick={()=>CancelOrderDltHandler(product._id)} className='deletebtn'>Cancel Order</button>
                    </Grid>
                    </Grid> 
                </div>)
            }
        </div>
    );
};

export default ManageAllOrder;