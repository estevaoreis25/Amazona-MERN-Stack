import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../data';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fecthDate();
  }, []);

  async function fecthDate() {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/products');
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <LoadingBox /> :
        error ? <MessageBox variant="danger">{error}</MessageBox> :
          (<div className='row center'>
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>)
      }
    </div >
  )
}