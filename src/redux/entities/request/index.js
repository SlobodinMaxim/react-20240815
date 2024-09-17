import { createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING, REJECTED } from "./request-statuses";

export const requestSlice = createSlice({
    extraReducers: (builder) => {
        builder
            .addMatcher(({ type }) => type.endsWith(PENDING), (state, { meta }) => {
                state[meta.requestId] = PENDING;
            })
            .addMatcher(({ type }) => type.endsWith(FULFILLED), (state, { meta }) => {
                state[meta.requestId] = FULFILLED;
            })
            .addMatcher(({ type }) => type.endsWith(REJECTED), (state, { meta }) => {
                state[meta.requestId] = REJECTED;
            });
    },

    initialState: {},

    name: `request`,

    selectors: {
        selectRequestStatusById: (state, id) => state[id] ?? IDLE,
    }
});

export const { selectRequestStatusById } = requestSlice.selectors;