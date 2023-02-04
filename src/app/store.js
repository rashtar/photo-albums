import { configureStore } from '@reduxjs/toolkit';
import {albumSlice} from "./state/albumSlice";
import {photoSlice} from "./state/photoSlice";

export default configureStore({
    reducer: {
        albums: albumSlice.reducer,
        photos: photoSlice.reducer
    },
})