import './App.css';
import { Switch, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';

function App() {
  return (
    <div>
      <HomePage/>
      <ShopPage/>
    </div>
  );
}

export default App;
