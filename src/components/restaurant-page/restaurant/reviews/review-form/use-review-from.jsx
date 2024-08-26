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
    case `SET_RATING`:
      return { ...state, rating: payload };
    case `CLEAR`:
      return { ...DEFAULT_VALUE };
    default:
      return { ...state };
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  const clear = useCallback(
    (payload) => dispatch({ payload, type: `CLEAR` }),
    []
  );

  const setName = useCallback(
    (payload) => dispatch({ payload, type: `SET_NAME` }),
    []
  );

  const setRating = useCallback(
    (payload) => dispatch({ payload, type: `SET_RATING` }),
    []
  );

  const setText = useCallback(
    (event) => dispatch({ payload: event, type: `SET_TEXT` }),
    []
  );

  return {
    clear,
    form,
    setName,
    setRating,
    setText,
  };
};
