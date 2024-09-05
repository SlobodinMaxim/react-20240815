import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normalized-mock";

const initialState = {
    entities: normalizedReviews.reduce((accumulator, item) => {
        accumulator[item.id] = item;

        return accumulator;
    }, {}),
    ids: normalizedReviews.map((item) => item.id),
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
    },
});

export const { selectReviewById } = reviewsSlice.selectors;