import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: false
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