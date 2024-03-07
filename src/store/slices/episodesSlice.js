import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prev: null,
    next: null,
    episodeName: null,
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data
        } catch (e) {
            const error = e.response.data;
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setEpisodeName: (state, action) => {
            state.episodeName = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {next, prev}, results} = action.payload;
                state.episodes = results
                state.next = next
                state.prev = prev
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.loading = false
                state.error = null
                state.episodeName = null

            })
            .addMatcher(isPending(getAll), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action
                state.loading = false
            })
})


const {reducer: episodeReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll,

}

export {
    episodeReducer,
    episodesActions
}