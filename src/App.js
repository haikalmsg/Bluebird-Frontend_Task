import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Mybook from './Pages/Mybook/Mybook';
import Wishlist from './Pages/WishList/Wishlist';
import Topbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myBook" element={<Mybook />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
