
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions';


const addProduct = (state, product) => {
    if (state[product.id]) {
        state[product.id].count ++;
    } else {
        state[product.id] = {... product, count: 1};
    }
    return { ...state };

}

const removeProduct = (state, product) => {
    delete state[product];
    return { ...state};

}

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProduct(state, action.payload);

        case REMOVE_PRODUCT:
            return removeProduct(state, action.payload);

        default:
            return state;
    }
};