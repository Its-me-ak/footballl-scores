import { createSlice } from '@reduxjs/toolkit';
import { fetchLiveMatches, fetchFixtures } from '../thunks/matchesThunk';

const initialState = {
    liveMatches: [],
    fixtures: [],
    loading: false,
    error: null,
};

const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    extraReducers: (builder) => {
        builder
            // Live Matches
            .addCase(fetchLiveMatches.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLiveMatches.fulfilled, (state, action) => {
                state.loading = false;
                state.liveMatches = action.payload;
            })
            .addCase(fetchLiveMatches.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fixtures
            .addCase(fetchFixtures.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFixtures.fulfilled, (state, action) => {
                state.loading = false;
                state.fixtures = action.payload;
            })
            .addCase(fetchFixtures.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default matchesSlice.reducer;
