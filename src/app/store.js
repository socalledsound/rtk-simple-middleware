import { configureStore } from '@reduxjs/toolkit';
import middlewarez from './middlewarez';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
reducer: {
    counter: counterReducer,
},
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([middlewarez])
});