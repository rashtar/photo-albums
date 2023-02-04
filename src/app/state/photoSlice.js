import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        value: [],
    },
    reducers: {
        loadPhotos: (state, action) => {
            state.value = action.payload
        },
        clearPhotos: (state) => {
            state.value = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { loadPhotos, clearPhotos } = photoSlice.actions

export default photoSlice.reducer