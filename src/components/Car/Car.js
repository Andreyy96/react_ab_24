import {useDispatch} from "react-redux";

import {carsActions} from "../../store";
import {carService} from "../../services";

const Car = ({car}) => {

    const {id, brand, price, year} = car
    const dispatch = useDispatch()


    const deleteCar = async () => {
        await carService.delete(id)
        dispatch(carsActions.setTrigger(prev => !prev))
    }

    return (
        <div>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car}