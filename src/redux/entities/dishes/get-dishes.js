import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDisheIds } from ".";

export const getDishes = createAsyncThunk(
    'dishes/getDishes',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dishes`);
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
            return selectDisheIds(getState()).length === 0;
        },
    }
);