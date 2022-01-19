import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>       
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
