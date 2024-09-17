import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from ".";

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/restaurants`);
        if (!response.ok) {
            rejectWithValue(`bad request`);
        }

        const result = await response.json();
        if (!result?.length) {
            rejectWithValue(`bad result`);
        }

        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectRestaurantIds(getState()).length === 0;
        },
    }
);