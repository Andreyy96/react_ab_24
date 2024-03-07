import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    characters: [],

}

const getAllByIds = createAsyncThunk(
    "charactersSlice/getAllByIds",
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids)
            return data
        }
        catch (e) {
            const error = e.response.data;
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAllByIds.fulfilled, (state, action) => {
                state.characters = action.payload
            })
})

const {reducer: characterReducer, actions} = charactersSlice

const characterActions = {
    ...actions,
    getAllByIds
}

export {
    characterReducer,
    characterActions
}