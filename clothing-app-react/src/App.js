import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';
import Header from './Components/Header/Header';
import { auth } from './Firebase/Firebase';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  //useEffect in place of componentdidmount and componentwillunmount
  useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
      //console.log('current user',currentUser);
    });
    return() => {
      unsubscribeFromAuth();
    }
  },[])
  return (
    <Router>
         <div>
           {/* Current user props passed in to determine sign in or sign out */}
           <Header currentUser={ currentUser }/>
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
