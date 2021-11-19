import Card from "../UI/Card"
import MealsItem from "./MealsItem/MealsItem"

const DUMMY_MEALS = [
    {
        id: '1',
        name: 'Sushi',
        desc: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: '2',
        name: 'Egg Kari',
        desc: 'Finest and veggies',
        price: 20.99
    },
    {
        id: '3',
        name: 'Egg Burger',
        desc: 'American Burger and meaty',
        price: 20.99
    },
]

const AvalibleMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealsItem key={meal.id} id={meal.id} meal={meal} />)
    return (
        <div className='my-12 lg:mx-60 place-items-center flex-col'>
            <div className='bg-white rounded-xl pb-4 px-8'>
                <Card >
                    <ul >{mealsList}</ul>
                </Card>
            </div>
        </div>
    )
}
export default AvalibleMeals
//