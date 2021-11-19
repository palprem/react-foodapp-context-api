import ReactDOM from 'react-dom'
const Backdrop = props => {
    return <div></div>
}
// h-screen w-full flex justify-center items-center place-items-center flex-col bg-blue-500
const ModelOverlay = props => {
    return <div className='  bg-black   rounded-md text-white px-4 py-3 '>
        {props.children}
    </div>

}
const portalElement = document.getElementById('overlays')

const Model = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
        </>
    )
}
export default Model