import axios from 'axios';
import {PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from '../constants/product-Constants';
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const {data} = await axios.get('/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: err.message
        })
    }
}

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST
    });
    try {
        const {data} = await axios.get(`/api/products/${productId}`);
        // console.log('11-11');
        // console.log(data);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err) {
        // console.log('55-55');
        // console.log(err);
        // console.log('66-66');
        // console.log(err.response);
        // console.log('77-77');
        // console.log(err.data.message);

        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: err.response && err.response.data.message 
            ? err.response.data.message
            : err.message,
        })
    }
}

