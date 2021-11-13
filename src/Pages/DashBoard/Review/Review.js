import { Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
// import useAuth from '../../../Hooks/useAuth/useAuth';
import './Review.css';
const Review = () => {
    // const {user} = useAuth()
    const [value, setValue]= React.useState(1);
    const [email, setEmail] = React.useState('');
    const [feedback, setFeedback] = React.useState('');


   const emailHandler=(e)=>{
       const email = e.target.value;
       setEmail(email)
   }
   const feedbackHandler = e =>{
       const feedback = e.target.value;
       setFeedback(feedback)
   }
   const reviewData = {
    Rating:value,email:email,feedback:feedback
}

    const reviewHandler=(e)=>{
        e.preventDefault();
        
        const url = 'https://blooming-basin-45530.herokuapp.com/review'
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/JSON'
             },
             body:JSON.stringify(reviewData)
        })
        .then(res =>{
        
            alert('Thanks for your feedback')
        })
    }

    
    
    return (
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
    <form onSubmit={reviewHandler}  className="reviewField">
      <Typography variant="h5" component="legend">Give your Rating</Typography>
      <Rating
        sx={{fontSize:'40px'}}
        name='ratinStar'
        value={value}
        onChange={( event, newValue)=>{
         setValue(newValue)
           
        }}
    
      />
      <TextField
     className="dataField"
      id="standard-basic" 
      onChange={emailHandler}
      label="Nick name" 
      variant="standard" 
      name="userEmail"
      required
     
      />
     <TextField
        className="dataField"
        id="standard-textarea"
        label="Give us your feedback"
        placeholder="Placeholder"
        onChange={feedbackHandler}
        multiline
        variant="standard"
        name="feedback"
        required
       
      />
      <TextField id="standard-basic" 
        className="dataField"
        sx={{width:'60%',mt:2, bgcolor:'primary.main'}}
        variant="standard" 
        type='submit'
        value="Add Review"
        />
    </form>
    </Box>    
    );
};

export default Review;