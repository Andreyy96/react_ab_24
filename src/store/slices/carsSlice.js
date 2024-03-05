import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: false,
}

const carSlice = createSlice({
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
            state.trigger= !action.payload
            console.log(state.trigger)
        }
    }
})

const {reducer: carsReducer, actions} = carSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer, carsActions
}