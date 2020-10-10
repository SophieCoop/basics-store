export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

export const removeProductfromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  };
};