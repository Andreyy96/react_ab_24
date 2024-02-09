import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../../services/carService";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid}, setValue} =useForm({})

    const createCar = async (car) => {
        await carService.postCar(car)
        setTrigger(prev => !prev)
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const updateCAR = (data) => {
        const id  = carForUpdate.id
        carService.updateCar(id, data)
        setTrigger(prev => !prev)
        setCarForUpdate(null)
        reset()
    }

    return (
        <div>
            <form onSubmit={carForUpdate ? handleSubmit(updateCAR) : handleSubmit(createCar)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'min 1 max 2 character'
                    }
                })}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min:  0,
                    max: 1_000_000
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button disabled={!isValid}>save</button>
            </form>
        </div>
    );
};

export {CarForm};
