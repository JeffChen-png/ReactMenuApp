import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addToCart } from '../../actions';
import Spinner from '../spinner'
import Error from '../error/';

import './menu-list.sass';

class MenuList extends Component {

    componentDidMount() {
        const { RestoService, menuLoaded, menuRequested, menuError } = this.props;
        menuRequested();
        RestoService.getMenuItems()
            .then(data => menuLoaded(data))
            .catch(() => menuError())
    }

    render() {
        const { menuItems, loading, error, addToCart } = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map((item) => {
                        return (<MenuListItem key={item.id} onAddToCart={() => addToCart(item.id)} menuItem={item} />)
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) => dispatch(menuLoaded(newMenu)),
        menuRequested: () => dispatch(menuRequested()),
        menuError: () => dispatch(menuError()),  
        addToCart: (id) => dispatch(addToCart(id))
    }
}

// const mapDispatchToProps = { //тоже самое что и функция выше
//     nemuLoaded
// }

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));