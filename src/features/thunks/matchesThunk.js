import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '321043a0d10f82d6260b970e7941c683';
const BASE_URL = 'https://v3.football.api-sports.io';
const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
};

// Fetch Live Matches
export const fetchLiveMatches = createAsyncThunk('matches/fetchLiveMatches', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/fixtures`, { headers, params: { live: 'all' } });
        // console.log(response);
        return response.data.response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Fetch Fixtures
export const fetchFixtures = createAsyncThunk('matches/fetchFixtures', async ({ league, season }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/fixtures`, { headers, params: { league, season } });
        return response.data.response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
