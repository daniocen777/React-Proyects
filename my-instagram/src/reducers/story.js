import { types } from "../types/types";

export const storyReducer = (state = [], action) => {
  switch (action.type) {
    case types.storyCreate:
      return [...state, action.payload];
    case types.storyUpdate:
      return state.map((story) =>
        story._id === action.payload._id ? action.payload : story
      );
    case types.storyDelete:
      return state.filter((story) => story._id !== action.payload);

    case types.storyFetch:
      return action.payload;
    default:
      return state;
  }
};
