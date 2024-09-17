import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: "users",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUserIds: (state) => state.ids,
    }, extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            });
    }
});

export const { selectUserById, selectUserIds } = usersSlice.selectors;