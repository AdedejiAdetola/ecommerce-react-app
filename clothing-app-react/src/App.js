import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';
import Header from './Components/Header/Header';
import { auth, createUserProfileDocument } from './Firebase/Firebase';
import React from 'react';

// functional component gives same result as class component below




// function App() {
//   const [currentUser, setCurrentUser] = useState(null);

//   //useEffect in place of componentdidmount and componentwillunmount
//   useEffect(() => {
//     const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth){
//         const userRef = await createUserProfileDocument(userAuth);
//         userRef.onSnapshot(snapShot => {
          
//           setCurrentUser({
//             'id': snapShot.id,
//             ...snapShot.data()
//           })
//           console.log('.............add.........')
//           console.log(snapShot.data())
//         })
//       }else{
//         setCurrentUser(userAuth);
//         console.log('here')
//       }
//     });
    
//     return() => unsubscribeFromAuth();
//   }, [])

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          //console.log(this.state)
        });
      }

      this.setState({ currentUser: userAuth})
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    
      <Router>
          <div>
            {/* Current user props passed in to determine sign in or sign out */}
            <Header currentUser={ this.state.currentUser }/>
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
}

export default App;
