import { useState, useContext } from "react";
import { useRef } from "react/cjs/react.development";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [validAmount, setValidAmount] = useState(true)
    const amountInputRef = useRef()
    const handleSubmit = (event) => {
        const entertedAmount = amountInputRef?.current?.value

        event.preventDefault();
        const entertedAmountNumber = +entertedAmount

        if (entertedAmount?.trim()?.length === 0 ||
            entertedAmountNumber < 1 ||
            entertedAmountNumber > 5
        ) {
            setValidAmount(false)
            return
        }
        props.onAddToCart(entertedAmountNumber)
    }
    return (
        <form className='flex' onSubmit={handleSubmit}>
            <Input label='Amount' ref={amountInputRef} input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button type='submit' className='py-1 px-3 mx-1 rounded-full bg-red-800 text-white font-medium'>+ Add</button>
            {!validAmount && <p>Please enter a valid amount(1-5)</p>}
        </form>
    )
}
export default MealItemForm;