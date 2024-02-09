import {Car} from "../Car/Car";

const Cars = ({cars, setCarForUpdate, setTrigger}) => {

    return (
        <div>
            {cars.map(car => <Car car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger} key={car.id}/>)}
        </div>
    );
};

export {Cars};
