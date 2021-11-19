import MealItemForm from "./MealItemForm"
import { useState, useContext } from "react";
import CartContetext from "../../../store/cart-context";
const MealsItem = (props) => {
    const cartCtx = useContext(CartContetext)

    const price = `$${props?.meal?.price?.toFixed(2)}`
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    // console.log('cartCtx', cartCtx);

    return (
        <>
            <li>
                <div className='text-black py-1 '>
                    <div className='border-b-2 my-2'>
                        <h2 className='font-bold'>{props?.meal?.name}</h2>
                        <div className='italic'>{props.meal?.desc}</div>
                        <div className='text-red-700 font-medium'>{price}</div>
                    </div>
                </div>
                <div className='float-right -mt-16'>
                    <MealItemForm onAddToCart={addToCartHandler} />
                </div>
            </li>
        </>
    )
}
export default MealsItem