import {useDispatch, useSelector} from "react-redux";

import {carsActions} from "../../store";
import {carService} from "../../services";

const Car = ({car}) => {

    const {id, brand, price, year} = car
    const {trigger} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    const deleteCar = async () => {
        await carService.deleteCar(id)
        dispatch(carsActions.setTrigger(trigger))
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