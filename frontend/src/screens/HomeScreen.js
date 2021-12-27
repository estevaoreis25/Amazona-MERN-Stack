import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../data';
import Product from '../components/Product';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fecthDate();
  }, []);

  async function fecthDate() {
    const { data } = await axios.get('/api/products');
    setProducts(data);
  };

  return (
    <div>
      <div className='row center'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}