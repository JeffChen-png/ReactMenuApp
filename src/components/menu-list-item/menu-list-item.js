import React from 'react';
import './menu-list-item.sass';
import { Link } from 'react-router-dom';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;
    let foodCategoryIcon = category;

     switch (category) {
        case "salads":
            foodCategoryIcon = (<i className="fas fa-carrot"></i>);
            break;
        case "pizza":
            foodCategoryIcon = (<i className="fas fa-pizza-slice"></i>);
            break;
        case "meat":
            foodCategoryIcon = (<i className="fas fa-bacon"></i>);
            break;
        default:
            foodCategoryIcon = category;
            break;
    }
    return (
        
            <li className="menu__item">
                <Link to={`/menu/${menuItem.id}`}>
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span> {foodCategoryIcon}</div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                </Link>
                <button className="menu__btn" onClick={() => onAddToCart()}>Add to cart</button>
            </li>
    )
}

export default MenuListItem;