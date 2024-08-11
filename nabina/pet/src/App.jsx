import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Other from './pages/Other';

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/other" element={<Other />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
