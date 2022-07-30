import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/firbaseConfig";
import { types } from "../types/types";
import {
  finishLoadingAction,
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
} from "./uiAction";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoadingAction());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginAction(user.uid, user.displayName));
        dispatch(removeErrorAction());
        dispatch(finishLoadingAction());
      })
      .catch((error) => {
        console.error("Error", error);
        dispatch(setErrorAction("error de validación"));
        dispatch(finishLoadingAction());
      });
  };
};

export const loginAction = (uid, displayName) => {
  return {
    type: types.login,
    payload: { uid, displayName },
  };
};

// Registro
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // establecer el nombre de usuario
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            console.log("Perfil actualizado", name);
            dispatch(loginAction(user.uid, user.displayName));
          })
          .catch((error) => {
            console.error("createUserWithEmailAndPassword", error);
          });
      })
      .catch((error) => {
        console.error("startRegisterWithEmailPasswordName", error);
      });
  };
};

// Login con google
export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(loginAction(user.uid, user.displayName));
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
};
