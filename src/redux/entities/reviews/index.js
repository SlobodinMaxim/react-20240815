import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

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
            .addCase(getReviews.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            });
    }
});

export const { selectReviewById, selectReviewIds } = reviewsSlice.selectors;