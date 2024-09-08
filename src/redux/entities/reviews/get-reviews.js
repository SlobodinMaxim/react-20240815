import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from ".";

export const getReviews = createAsyncThunk(
    'reviews/getReviews',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/reviews`);
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
            return selectReviewIds(getState()).length === 0;
        },
    }
);