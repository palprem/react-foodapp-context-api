import CartContetext from "../../store/cart-context"
import { useContext, useReducer } from "react"


const HeaderCartButton = (props) => {
    const context = useContext(CartContetext)
    const numberOFCaartItems = context.item.reduce((currEle, item) => {
        // console.log('item', currEle);
        return currEle + item.amount
    }, 0)
    console.log('>>>>>context', context);
    return (
        <>
            <button onClick={props.showChart} className='text-white py-2 px-4 bg-gray-900 rounded-full'>
                <span><i class="fas fa-cart-plus"></i></span>
                <span className='px-2'>Your Cart</span>
                <span className='px-2 bg-red-600 rounded-full'>{numberOFCaartItems}</span>
            </button>
        </>
    )

}
export default HeaderCartButton