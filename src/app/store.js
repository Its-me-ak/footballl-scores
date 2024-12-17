import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from '../features/slices/matchesSlice';
// Add other reducers as needed

const store = configureStore({
    reducer: {
        matches: matchesReducer,
        // Add other reducers here
    },
});

export default store;
