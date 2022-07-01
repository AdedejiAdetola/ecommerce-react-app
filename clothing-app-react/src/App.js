import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
         <div>
           <Header />
           <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>

              <Route exact path="/shop">
                <ShopPage/>
              </Route>

              <Route exact path='/signin'>
                <SignInSignUp />
              </Route>
           </Switch>
        </div>
    </Router>

   
  );
}

export default App;
