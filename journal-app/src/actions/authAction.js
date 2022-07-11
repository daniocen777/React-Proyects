import { getAuth, signInWithPopup } from "firebase/auth";
import { googleAuthProvider } from "../firebase/firbaseConfig";
import { types } from "../types/types";

export const startLogiEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      // Dispar loginAction
      dispatch(loginAction(123, "lolas"));
    }, 3000);
  };
};

export const loginAction = (uid, displayName) => {
  return {
    type: types.login,
    payload: { uid, displayName },
  };
};

// Login con google
export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(loginAction(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
