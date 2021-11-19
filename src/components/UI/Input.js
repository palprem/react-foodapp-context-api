import React from 'react'
const Input = React.forwardRef((props, ref) => {
    return <div>
        <label htmlFor={props?.input?.id} className='text-xs font-bold' >{props.label}</label>
        <input className='border border-black rounded-md mx-1' ref={ref} id={props?.input?.id} {...props.input} />
    </div>
})
export default Input