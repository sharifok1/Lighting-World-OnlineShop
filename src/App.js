
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import './App.css';
import AllProduct from './Pages/AllProduct/AllProduct';
import Login from './Pages/Authentication/Login';
import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Navigation/Navigation';



function App() {
  return (
    <div className="App">
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
          <Route path="/DisplayProduct">
          <AllProduct></AllProduct>
          </Route>
          <Route path="/Dashboard">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/Login">
          <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;