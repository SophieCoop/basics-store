import React from 'react';
import { useDispatch } from 'react-redux';
import '../assets/style/addToCartBtn.css';
import { addProductToCart } from '../actions';


const AddToCartBtn = ({product}) => {
    const dispatch = useDispatch();

    const onItemClick = () => {
        dispatch(addProductToCart(product));
    }

    return (
        <div className="addToCartBtnContainer" color="black" onClick={onItemClick} >
            <span>ADD TO CART</span>
        </div>
    )
};

export default AddToCartBtn;