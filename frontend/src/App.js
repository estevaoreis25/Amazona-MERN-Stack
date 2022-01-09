import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CartScreen from './screens/CartScreen';
function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <Link className='brand' to='/'>
              amazona
            </Link>
          </div>
          <div>
            <Link to='/cart'>Cart</Link>
            <Link to='/signin'>Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </main>
        <footer className='row center'>All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
