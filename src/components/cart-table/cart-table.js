import React from 'react';
import './cart-table.sass';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {deleteFromCart, menuError, cartClear} from '../../actions';

const CartTable = ({items, onDelete, RestoService, menuError, cartClear}) => {

    const sendData = (data) => {
        RestoService.postCartItems(data)
            .then(() => cartClear())
            .catch(() => menuError())
    } 

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map((item) => {
                        const{title, price, url, id, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{count}</div>
                                <div className="cart__item-price">{count * price}$</div>
                                <div className="cart__close" onClick={() => onDelete(id)}>&times;</div>
                            </div>
                        )
                    })
                }
                <button onClick={() => sendData(items)}>Pay</button>
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteFromCart(id)),
        menuError: () => dispatch(menuError()),  
        cartClear: () => dispatch(cartClear()),  
    }
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));