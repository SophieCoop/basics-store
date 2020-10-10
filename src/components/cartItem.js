import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductfromCart } from '../actions';
import '../assets/style/cartItem.css';

const CartItem = ({ product }) => {

    const dispatch = useDispatch();

    const onRemoveItemClick = () => {
        dispatch(removeProductfromCart(product.id));
    }
    
    const RemoveBtn = () => {
        return (
            <div className="cartRemoveBtn" onClick={onRemoveItemClick} >
                <span>REMOVE</span>
            </div>
        )
    }

    const productCount = product.count ? "X " + product.count : "";
    return (
        <div className="mainItemContainer">
            <div className="cartItemContainer">
                <div className="cartImageContainer">
                    <img src={require(`../assets/images/${product.id}.jpg`)} className="cartItemImage" alt="cartItemImage" />
                </div>
                <span className="cartProductName">{`${product.name}  ${productCount}`}</span>
                <span className="cartProductPrice">{`$${product.price}`}</span>
            </div>
            <RemoveBtn />
        </div>
    )
}


export default CartItem;