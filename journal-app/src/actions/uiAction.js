import { types } from "../types/types";

export const setErrorAction = (error) => {
  return {
    type: types.uiSetError,
    payload: error,
  };
};

export const removeErrorAction = () => {
  return {
    type: types.uiRemoveError,
  };
};

export const startLoadingAction = () => {
  return {
    type: types.uiStartLoading,
  };
};

export const finishLoadingAction = () => {
  return {
    type: types.uiFinishLoading,
  };
};
