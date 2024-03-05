import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../store";
import {carService} from "../../services";
import {Car} from "../Car";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setCars(data)))
    }, [dispatch, trigger]);

    console.log(cars)
    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars}