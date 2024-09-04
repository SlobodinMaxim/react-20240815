import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../materials/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((accumulator, item) => {
        accumulator[item.id] = item;

        return accumulator;
    }, {}),
    ids: normalizedDishes.map((item) => item.id),
};

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id],
    },
});

export const { selectDishById } = dishesSlice.selectors;