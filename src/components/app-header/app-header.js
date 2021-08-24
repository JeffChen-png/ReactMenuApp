import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.sass';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const AppHeader = ({total}) => {
    return (
        <header className="header">
        
            <Link to='/menu/' className="header__link">
                Menu
            </Link>

            <Link to="/cart/" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({items}) => {
    return {
        total: items.reduce((sum, item) => {
           return (sum + item.count * item.price)
        }, 0)
    }
}


export default connect(mapStateToProps)(AppHeader);