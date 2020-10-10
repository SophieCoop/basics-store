import React from 'react';
import '../assets/style/header.css';



const Header = ({headerImage}) => {
    return (
        <div className="headerImageContainer">
            <img src={require(`../assets/images/${headerImage}`)} className="headerImage" alt="headerImage" />
        </div>
    )

}

export default Header;