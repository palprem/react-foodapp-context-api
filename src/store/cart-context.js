import React, { createContext } from "react";

const CartContetext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
})
export default CartContetext