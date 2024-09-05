import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalized-mock";

const initialState = {
    entities: normalizedUsers.reduce((accumulator, item) => {
        accumulator[item.id] = item;

        return accumulator;
    }, {}),
    ids: normalizedUsers.map((item) => item.id),
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    selectors: {
        selectUserById: (state, id) => state.entities[id],
    },
});

export const { selectUserById } = usersSlice.selectors;