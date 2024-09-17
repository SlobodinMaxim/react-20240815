import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./get-dishes-by-restaurant-id";

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
            .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload);
            });
    }
});

export const { selectDishById, selectDisheIds } = dishesSlice.selectors;