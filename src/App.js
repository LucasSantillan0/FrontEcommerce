import './App.css';
import Home from './containers/Home/Home'
import Categories from './containers/Categories/Categories'
import {Switch, Route} from 'react-router-dom' 


function App() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/categories"} component={Categories} />
    </Switch>
  );
}

export default App;
