import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./entities/dishes";
import { restaurantsSlice } from "./entities/restaurants";
import { reviewsSlice } from "./entities/reviews";
import { usersSlice } from "./entities/users";
import { requestSlice } from "./entities/request";

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  }
});
