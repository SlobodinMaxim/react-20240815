import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock";

const initialState = {
    entities: normalizedRestaurants.reduce((accumulator, item) => {
        accumulator[item.id] = item;

        return accumulator;
    }, {}),
    ids: normalizedRestaurants.map((item) => item.id),
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantIds: (state) => state.ids,
    },
});

export const { selectRestaurantById, selectRestaurantIds } = restaurantsSlice.selectors;