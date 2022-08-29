import { configureStore } from "@reduxjs/toolkit";
import { storyReducer } from "../reducers/story";

export const store = configureStore({
  reducer: {
    stories: storyReducer,
  },
});
