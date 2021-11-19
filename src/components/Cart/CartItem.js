import { useContext } from 'react/cjs/react.development';
import CartContetext from '../../store/cart-context';

const CartItem = (props) => {
    const cartCtx = useContext(CartContetext)
    const price = `$${props.price?.toFixed(2)}`

    return (
        <ul>
            <li>
                <div className=''>
                    <h2 className='text-xl font-bold'>{props.name}</h2>
                    <div>
                        <span className='text-red-700 font-semibold'>{price}</span>
                        <span className='text-sm'>X {props.amount}</span>
                    </div>
                </div>
                <div><button onClick={props.Remove}>-</button></div>
                <div><button onClick={props.Add}>+</button></div>
            </li>
        </ul>
    )
}
export default CartItem