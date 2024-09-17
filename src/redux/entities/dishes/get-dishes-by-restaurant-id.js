import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";
import { selectRestaurantById } from "../restaurants";

export const getDishesByRestaurantId = createAsyncThunk(
    'dishes/getDishesByRestaurantId',
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
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
            const { menu: dishIds } = selectRestaurantById(getState(), restaurantId) || {};

            // if (!dishIds?.length) {
            //     return true;
            // }

            for (let dishId of dishIds) {
                if (!selectDishById(getState(), dishId)) {
                    return true;
                }
            }

            return false;
        },
    }
);