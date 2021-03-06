import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux'

export default function CartScreen() {
  const productId = useParams().id;
  const { search } = useLocation();
  const qty = search ? Number(search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>ADD TO CART: ProductId = {productId} Qty = {qty}</p>
    </div>
  )
}
