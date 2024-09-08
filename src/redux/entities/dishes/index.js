import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectDisheIds: (state) => state.ids,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            });
    }
});

export const { selectDishById, selectDisheIds } = dishesSlice.selectors;