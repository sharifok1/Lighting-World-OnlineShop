import { AppBar, Button, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem,  ListItemText, Toolbar, Typography } from '@mui/material';
// import { Box } from '@mui/system';
import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
// import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Box} from '@mui/system';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './Dashboard.css'

const drawerWidth = 250;
const drawerHeight = '100vh' 

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user, logOut, admin} = useAuth()
//   const {admin} = UseAuth();
  console.log(admin)

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logOutHandler =()=>{
     alert('You are going to logout!!!');
     logOut()

  }
 

  const drawer = (
    
    <div
    style={{backgroundColor:'#777',color:'#fff'}}  sx={{ fontWeight: 500 }}
    >
      <Toolbar 
       sx={{mt:-7}}
      />
      <h2>Lighting World</h2>
      <Divider/>
     <Box sx={{textAlign:"start", p:1}}>
     <NavLink to="/Home"><Button sx={{color:'#000',fontSize: 18}}>Home</Button></NavLink>
      <NavLink to={`${url}`} ><Button sx={{color:'#000',fontSize: 18}}>Dashboard Home</Button></NavLink>
     </Box>
        {
          admin &&  <Box sx={{textAlign:"start", p:1}}> 
          <NavLink to={`${url}/MakeAdmin`}><Button sx={{color:'#000',fontSize: 18}}>Make Admin</Button></NavLink>
          <NavLink to={`${url}/ManageAllOrder`}><Button sx={{color:'#000',fontSize: 18}} >Manage All Order</Button></NavLink>
          <NavLink to={`${url}/ManageProduct`}><Button sx={{color:'#000',fontSize: 18}} >Manage Product</Button></NavLink>
          <NavLink to={`${url}/AddProduct`}><Button sx={{color:'#000',fontSize: 18}} >Add A product</Button></NavLink>
      </Box>
        }
          
                
        
      <List>
        {[ 
         <NavLink to={`${url}/MyOrder`}><Button sx={{color:'#000',fontSize: 18}} >My Order</Button></NavLink>,
        <NavLink to={`${url}/Payment`}><Button sx={{color:'#000',fontSize: 18}} >Payment</Button></NavLink>,
        <NavLink to={`${url}/Review`}><Button sx={{color:'#000',fontSize: 18}} >Review</Button></NavLink>,
        <Button sx={{color:'#000',fontSize: 18}} 
          onClick={logOutHandler}>
            <img style={{width:'40px'}} src="https://i.ibb.co/mXHQxyL/logout-ico.png" alt="" />
       </Button>
        ].map((text) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>
              {index % 0 === 0 ? <homeIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor:'#150254',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          pt:1.5,
          pb:1,
        }}
       
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid xs={4}>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
            </Grid>
            <Grid xs={8}>
              <Typography variant="h6" noWrap component="div">
              {user.displayName}
            </Typography>
           
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        >
          {drawer}
        </Drawer>
        <Drawer
        
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , height:drawerHeight},
          }}
          open
        
        >
          {drawer}
             
          </Drawer>
       </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p:1, bgcolor:'primary.main', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/MakeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>

        <Route path={`${path}/ManageAllOrder`}>
          <ManageAllOrder></ManageAllOrder>
        </Route>

        <Route path={`${path}/ManageProduct`}>
          <ManageProduct></ManageProduct>
        </Route>

        <Route path={`${path}/AddProduct`}>
          <AddProduct></AddProduct>
        </Route>

        <Route path={`${path}/MyOrder`}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/Payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/Review`}>
          <Review></Review>
        </Route>
      </Switch>


        <Box sx={{ flexGrow: 1 }}>
        </Box>
      </Box>
     
    </Box>
    
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
