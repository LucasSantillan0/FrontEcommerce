import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';
import { Switch, Route } from 'react-router-dom';
import { LoginButton } from './views/Login'
function App() {
  return (
    <Switch>
      <Route path="/login">
        
      </Route>
      <Route exact path='/'>
      <LoginButton/>
        <Navbar />
        <Home />
      </Route>
      <Route path='/categories'>
        <Navbar />
        <Categories />
      </Route>
    </Switch>
  );
}

export default App;
