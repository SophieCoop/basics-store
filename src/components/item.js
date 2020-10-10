import React from 'react';
import AddToCartBtn from "./addToCartBtn";

import '../assets/style/item.css';

const Item = ({ product }) => {
    return (
        <div className="itemContainer">
            <div className="imageContainer">
                <img src={require(`../assets/images/${product.id}.jpg`)} className="itemImage" alt="itemImage" />
            </div>

            <p className="textContainer">
                <span>{`MKT: ${product.id}`}</span>
                <span className="itemTitle">{`${product.name}`}</span>
                <span className="itemPrice">{`$${product.price}`}</span>
            </p>
            <div className="addToCartContainer">
                <AddToCartBtn product={product}/>
            </div>
        </div>
    )
};

export default Item;