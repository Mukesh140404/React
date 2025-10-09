import {configureStore} from '@reduxjs/toolkit';
import authSlicer from '../features/authSlicer';
const store = configureStore({
    reducer: {
        auth: authSlicer
    }
});

export default store;