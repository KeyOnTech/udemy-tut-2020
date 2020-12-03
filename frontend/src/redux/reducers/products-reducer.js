import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from '../../constants/products-Constants';
const initialState = {
    loading: true,
    products: [],
    error: {},
                        // title: 'Save Sensor 1',
                        // dataList: [],
                        // errors: [],
};
export const productsListReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        default:
            return state;
    }
}
