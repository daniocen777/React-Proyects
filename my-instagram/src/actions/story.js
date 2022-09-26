import * as api from "../api";
import { types } from "../types/types";

export const getStories = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchStories();
      const action = {
        type: types.storyFetch,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.error("ERROR: getStories()", error.message);
    }
  };
};

export const saveStory = (story) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createStory(story);
      const action = {
        type: types.storyCreate,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.error("ERROR: saveStory()", error.message);
    }
  };
};

export const updateStory = (id, story) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updateStory(id, story);
      const action = {
        type: types.storyUpdate,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.error("ERROR: updateStory()", error.message);
    }
  };
};

export const deleteStory = (id) => {
  return async (dispatch) => {
    try {
      await api.deleteStory(id);
      const action = {
        type: types.storyDelete,
        payload: id,
      };
      dispatch(action);
    } catch (error) {
      console.error("ERROR: deleteStory()", error.message);
    }
  };
};
