import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box} from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
// import useAuth from '../../../Hooks/useAuth/useAuth';
import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Reviews = () => {
    // const {user}=useAuth()
    const [review, setReview]= React.useState([])
    React.useEffect(()=>{
        const url = 'https://blooming-basin-45530.herokuapp.com/review'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    
    return (
        <div style={{ backgroundColor:'#777'}}>
            <Box sx={{m:4}} >
              <Typography variant='h4' sx={{color:'#fff',display:'flex', p:2}}>
                  Customer Review
              </Typography>
        <Stack direction="row" spacing={2} 
        style={{
            overflow:'scroll',width:'100%',overflowY:'hidden',
            }}>
           
               {
                   review.map(fedback=><Item
                    key={fedback._id}
                    style={{minWidth:'280PX',
                            backgroundColor:'#d0d1b2',
                            margin:'20px',
                        }}
                    >
                       <Typography component="legend">Customer syas</Typography>
                       <hr />
                       <AccountCircleIcon
                       style={{
                           border:'2px solid white',
                           borderRadius:'50%',
                           fontSize:"100px",
                           
                       }}
                       ></AccountCircleIcon>
                       <p style={{
                           fontSize:'20px',
                       }}>
                           {fedback.email}</p>
                       <p>{fedback.feedback}</p>

                       <div
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                           
                            >
                            <Rating name="read-only" value={fedback.Rating} readOnly />
                            <hr />
                               <p>Lighting World</p>
                            </div>
                   </Item>)
               }
            
        </Stack>
        </Box>
        </div>
    );
};

export default Reviews;