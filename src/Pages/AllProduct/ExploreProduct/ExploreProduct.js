import { Grid} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ExploreProduct = ({product}) => {

    return (
        <Grid item xs={4} sm={4} md={4}>
        <div className='displayCard'>
            <img className='DisplayImg' src={product.img} alt="productphoto" />
             <h3>{product.Name}</h3>
             <p>{product.Description.slice(0,120)}</p>
             <h3>Price:${product.Price}</h3>
          <NavLink to={`/MakeOrder/${product._id}`} className="Ordeerbtn" >Order Now</NavLink>
        </div>
    </Grid>
    );
};

export default ExploreProduct;