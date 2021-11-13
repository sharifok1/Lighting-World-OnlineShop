
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './ContextApi/AuthProvider/AuthProvider';
import AllProduct from './Pages/AllProduct/AllProduct';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Registration from './Pages/Authentication/Registration/Registration';
import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import MakeOrder from './Pages/makeOrder/MakeOrder';
import Navigation from './Pages/Navigation/Navigation';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/Home">
          <Home></Home>
          </Route>
          <Route path="/AllProduct">
          <AllProduct></AllProduct>
          </Route>
          <Route path="/MakeOrder/:_id">
          <MakeOrder></MakeOrder>
          </Route>
          <Route path="/DisplayProduct">
          <AllProduct></AllProduct>
          </Route>
          <PrivateRoute path="/Dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/Login">
          <Login></Login>
          </Route>
          <Route path="/Registration">
          <Registration></Registration>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;