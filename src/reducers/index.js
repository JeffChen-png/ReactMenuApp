const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };

        case "MENU_REQUESTED":
            return {
                ...state,
                loading: true,
            }

        case "MENU_ERROR":
            return {
                ...state,
                error: true
            };
        
        case "CART_CLEAR":
            return {
                ...state,
                items: [],
            };

        case "CART_ADD_ITEM":
            const id = action.payload;
            let addingItem = state.items.find((item) => item.id === id);

            if (addingItem === undefined) {

                addingItem = state.menu.find((item) => item.id === id);
                
                const newItem = {
                    title: addingItem.title,
                    price: addingItem.price,
                    url: addingItem.url,
                    id: addingItem.id,
                    count: 1
                };

                return {
                    ...state,
                    items: [
                        ...state.items, newItem
                        // ...state.items, addingItem
                    ]
                };
            } else {
                const AddingItemIndex = state.items.findIndex((item) => item.id === id);
                const newItem = {
                    ...addingItem,
                    count: (addingItem.count + 1)
                };
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, AddingItemIndex), 
                        newItem,
                        ...state.items.slice(AddingItemIndex + 1)
                    ]
                };
            }

        case "CART_DELETE_ITEM":
            const idx = action.payload;
            const deletingItemIndex = state.items.findIndex((item) => item.id === idx);
            const deletingItem = state.items.find((item) => item.id === idx);
            if (deletingItem.count > 1) {
                --deletingItem.count;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, deletingItemIndex), 
                        deletingItem,
                        ...state.items.slice(deletingItemIndex + 1)
                    ]
                }
            } else {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, deletingItemIndex),
                        ...state.items.slice(deletingItemIndex + 1)
                    ]
                }
            }

        default: 
            return state;
    }
}

export default reducer;