import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: false,
}

const carsSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        setTrigger: (state, action) => {
            state.trigger = action.payload
        },
        post: (state, action) => {
            carService.postCar(action.payload)
        },
        update: (state, action) => {
            carService.updateCar(action.payload.id, action.payload.car)
        },
        delete: (state, action) => {
           carService.deleteCar(action.payload)
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer, carsActions
}