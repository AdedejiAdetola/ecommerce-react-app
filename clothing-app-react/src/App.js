import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';

function App() {
  return (
    <Router>
         <div>
           <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>

              <Route exact path="/shop">
                <ShopPage/>
              </Route>
           </Switch>
        </div>
    </Router>

   
  );
}

export default App;
