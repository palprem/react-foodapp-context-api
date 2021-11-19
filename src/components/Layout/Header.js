import React from "react";
import mealImg from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <>
            <header className='px-12 flex py-4 bg-red-900 justify-between'>
                <h1 className=' text-xl text-white font-medium'>ReactMeals</h1>
                <HeaderCartButton showChart={props.showChart} />
            </header>

            <div className='absolute w-full h-screen bg-cover bg-fixed bg-no-repeat bg-center ' style={{ backgroundImage: `url("https://i.pinimg.com/originals/5b/be/51/5bbe514dd733c24cf53b26dcc5b61d30.jpg")` }} >
            </div>
        </>
    )
}
export default Header