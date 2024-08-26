import { useCallback, useReducer } from "react";

const DEFAULT_VALUE = {
  name: ``,
  text: ``,
  rating: 5,
};

const reducer = (state, { payload, type }) => {
  switch (type) {
    case `SET_NAME`:
      return { ...state, name: payload.target.value };
    case `SET_TEXT`:
      return { ...state, text: payload.target.value };
    case `DECREMENT_RATING`:
      return { ...state, rating: Math.max(1, state.rating - 1) };
    case `INCREMENT_RATING`:
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    case `CLEAR`:
      return { ...DEFAULT_VALUE };
    default:
      return { ...state };
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  const clear = useCallback(() => dispatch({ type: `CLEAR` }), []);

  const decrementRating = useCallback(
    () => dispatch({ type: `DECREMENT_RATING` }),
    []
  );

  const incrementRating = useCallback(
    () => dispatch({ type: `INCREMENT_RATING` }),
    []
  );

  const setName = useCallback(
    (event) => dispatch({ payload: event, type: `SET_NAME` }),
    []
  );

  const setText = useCallback(
    (event) => dispatch({ payload: event, type: `SET_TEXT` }),
    []
  );

  return {
    clear,
    decrementRating,
    form,
    incrementRating,
    setName,
    setText,
  };
};
