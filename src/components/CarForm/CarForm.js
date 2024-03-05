import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsActions} from "../../store";
import {carValidator} from "../../validators";
import {carService} from "../../services";


const CarForm = () => {
    const {register, reset, handleSubmit,  formState: {isValid, errors}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })
    const {carForUpdate} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    const createCar = async (car) => {
        await carService.postCar(car)
        dispatch(carsActions.setTrigger(prev => !prev))
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);


    const updateCAR = async (car) => {
        await carService.updateCar(carForUpdate.id, car)
        dispatch(carsActions.setCarForUpdate(null))
        dispatch(carsActions.setTrigger(prev => !prev))
        reset()
    }

    return (
        <div>
            <form onSubmit={carForUpdate ? handleSubmit(updateCAR) : handleSubmit(createCar)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <p>{errors.brand.message}</p>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <p>{errors.price.message}</p>}
                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <p>{errors.year.message}</p>}
                <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {CarForm}