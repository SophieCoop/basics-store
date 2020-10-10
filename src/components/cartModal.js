import React from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import CartItem from './cartItem';

import '../assets/style/modalContainer.css';


const CartModal = ({ handleClose }) => {

    const cartProducts = useSelector(state => state.cart);

    const CartProducts = () => {
        const cartProductsItems = Object.values(cartProducts).map(product =>
            <CartItem product={product} />
        );

        return <div>{cartProductsItems}</div>

    }

    const EmptyCartText = () => {
        return (
            <div className="modalEmptyCartText">
                <span>Your cart is empty</span>
            </div>
        )
    }

    return (
        <div className="modalContainer">
            <div className="modal-main">
                <CloseIcon className="close-icon" onClick={handleClose} />

                <div className="modalTitle">
                    <span>Your Cart</span>
                </div>

                {Object.keys(cartProducts).length == 0 ?
                    <EmptyCartText /> : <CartProducts />
                }
            </div>
        </div>
    )
}


export default CartModal;