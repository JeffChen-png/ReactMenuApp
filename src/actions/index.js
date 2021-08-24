const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: "MENU_REQUESTED"
    }
}

const menuError = () => {
    return {
        type: "MENU_ERROR"
    }
}

const addToCart = (id) => {
    return {
        type: "CART_ADD_ITEM",
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: "CART_DELETE_ITEM",
        payload: id
    }
}

const cartClear = () => {
    return {
        type: "CART_CLEAR"
    }
}


export {
    menuLoaded, menuRequested, menuError, addToCart, deleteFromCart, cartClear
}