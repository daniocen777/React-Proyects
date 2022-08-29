import { types } from "../types/types";

export const storyReducer = (state = [], action) => {
  switch (action.type) {
    case types.storyCreate:
      return [...state, action.payload];
    case types.storyFetch:
      return action.payload;
    default:
      return state;
  }
};
