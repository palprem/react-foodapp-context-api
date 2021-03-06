import { useContext, useReducer } from "react"
import CartContetext from "./cart-context";
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    console.log('state', state);
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems;

        if (existingCartItem) {
            const updatdeItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatdeItem
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id != action.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItem[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        // console.log('utem', item);
        dispatchCartAction({ type: 'ADD', item: item })
    }
    const removetemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }
    const cartContext = {
        item: cartState.items,
        totalAmount: cartState?.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removetemFromCartHandler
    }
    return <CartContetext.Provider value={cartContext}>
        {props.children}
    </CartContetext.Provider>
}
export default CartProvider