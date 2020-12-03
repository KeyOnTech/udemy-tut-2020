import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productsListReducer } from './reducers/products-reducer';
                                        /*** TEST - delete me */
                                        // import data from '../data';
const initialState = {};
const reducer = combineReducers({
    productsList: productsListReducer,
    productDetails: productDetailsReducer,
})
                                        /*** TEST - delete me */
                                        // const reducer = (state, action) => {
                                        //     return {products: data.products};
                                        // }
/*** PROD */
// const composeEnhancer = compose;
/*** DEV */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*** PROD */
// const store = createStore(reducer, initialState);
/*** DEV */
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
