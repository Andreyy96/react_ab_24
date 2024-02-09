import {carService} from "../../../services/carService";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car

    let deleteCAR = () => {
        carService.deleteCar(id)
        setTrigger(prev => prev === false)
    }

    return (
        <div>
            <p>id) {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={()=>setCarForUpdate(car)}>update car</button>
            <button onClick={deleteCAR}>delete car</button>
        </div>
    );
};

export {Car};
