import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    // const [product, setProduct] = useState()
    const [mgs,setMgs]=useState('')
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    // setProduct(data);
    const url  = 'https://blooming-basin-45530.herokuapp.com/allProducts'
    fetch(url, {
      method:'POST',
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>{
      if(res.status===200){
        setMgs('Product successfully added');
        reset()
      } 
    })
 
  }

    return (
        <div>
            <h1>for uploading product please fill the form carefully!!</h1>
             <form onSubmit={handleSubmit(onSubmit)}>

            <Box className="input-field">  
            <input className="reg-filed" {...register("Name")} placeholder="Enter Product Name"  required/>
            <input className="reg-filed" {...register("Description")} placeholder="description about product" required/>   
            <input className="reg-filed" {...register("Price")} placeholder="Product Price" required/>   
            <input className="reg-filed" {...register("img")} placeholder="past img url link" required/>   
            <input className="reg-btn" type="submit" value="upload product" />
            </Box>
            
            <Box container sx={{ml:8,mr:8}}>
            <Alert severity="success">{mgs}</Alert>
            </Box>

            </form>
        </div>
    );
};

export default AddProduct;