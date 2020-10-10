import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import '../assets/style/bar.css';

const Bar = ({ handleCartClick }) => {

    const cartProducts = useSelector(state => state.cart);

    const countCartItems = useMemo(() => {
        return Object.values(cartProducts).reduce((agg, product) => agg + product.count, 0);
    }, [cartProducts]);



    const CartBtn = () => {
        return (
            <div className="cartBtn" onClick={handleCartClick}>
                <span>Cart</span>
                {countCartItems > 0 && <span>{`${countCartItems} items`}</span>}
            </div>
        )
    }

    return (
        <div className="barContainer">
            <span className="barTitle">Basics Store</span>
            <CartBtn />
        </div>
    )
}

export default Bar;