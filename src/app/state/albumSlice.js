import { createSlice } from '@reduxjs/toolkit'

export const albumSlice = createSlice({
    name: 'albums',
    initialState: {
        value: [],
    },
    reducers: {
        loadAlbums: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { loadAlbums } = albumSlice.actions

export default albumSlice.reducer