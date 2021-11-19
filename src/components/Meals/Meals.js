import MealSummery from "./MealsSummery";
import AvalibleMeals from "./AvalableMeals";
const Meals = () => {
    return (
        <>
            <div className='relative'>
                <MealSummery />
                <AvalibleMeals />
            </div>
        </>
    )
};

export default Meals