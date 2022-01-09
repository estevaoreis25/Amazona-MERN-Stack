import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReduces';
import { productDetailsReducer, productListReducer } from "./reducers/productReduces";

const initialState = {
  /*  cart: localStorage.getItem('cartItems') ?
     JSON.parse(localStorage.getItem('cartItems')) :
     [], */

};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);


export default store;