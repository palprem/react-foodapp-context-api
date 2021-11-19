import { useContext } from 'react/cjs/react.development';
import CartContetext from '../../store/cart-context';
import Model from '../UI/Model'
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContetext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx?.item?.length > 0
    console.log('cartCtx', cartCtx);

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const cartItems = cartCtx.item?.map((item) => <CartItem key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)} />);
    console.log('cartItems', cartItems);
    return (
        <div>
            <Model>
                {cartItems}
                <div>
                    <span>Total Amount:</span>
                    <span>{totalAmount ?? 0}</span>
                    <div className=' text-black '>
                        <button onClick={props.showChart} className='py-1 px-2 mx-2  bg-white rounded-full border'>Close</button>
                        {hasItems && <button className=' py-1 px-2  bg-red-900 rounded-full text-white border'>Order</button>}
                    </div>
                </div>
            </Model>
        </div>
    )
}
export default Cart