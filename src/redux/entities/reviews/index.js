import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
        selectReviewIds: (state) => state.ids,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload);
            });
    }
});

export const { selectReviewById, selectReviewIds } = reviewsSlice.selectors;