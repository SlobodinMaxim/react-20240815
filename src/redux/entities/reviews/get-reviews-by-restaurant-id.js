import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewById } from ".";
import { selectRestaurantById } from "../restaurants";

export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviews',
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
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
        condition: (restaurantId, { getState }) => {
            const { reviews } = selectRestaurantById(getState(), restaurantId) || {};

            if (!reviews?.length) {
                return true;
            }

            for (const reviewId of reviews) {
                if (!selectReviewById(getState(), reviewId)) {
                    return true;
                }
            }

            return false;
        },
    }
);