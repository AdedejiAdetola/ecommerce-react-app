import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';

function App() {
  return (
    <div>
      <ShopPage />
    </div>
  );
}

export default App;
