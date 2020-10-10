import React, { useEffect, useState } from 'react';
import data from '../api/mockData.json';
import Item from './item';
import Header from "./header";
import Bar from './bar';
import CartModal from './cartModal';

import '../assets/style/storePage.css';

const StorePage = () => {

    const [modalShow, setModalShow] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // simulates async api
        setTimeout(() => setProducts(data.products), 500)
    }, [])


    const handleCartOpen = () => {
        setModalShow(true);
    }

    const handleCartClose = () => {
        setModalShow(false);
    }

    const Products = () => {
        return products.map(item => {
            return (
                <Item key={item.id} product={item} />
            )
        });
    }

    return (
        <div className="container">
            <Header headerImage={data.headerImage} />
            <Bar handleCartClick={handleCartOpen} />

            {modalShow && <CartModal handleClose={handleCartClose} />}

            <div className="productsContainer">
                <Products />
            </div>
        </div>
    )
}

export default StorePage;