import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
};

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await singInWithGoogle();
        console.log(result)
    }
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const {ok, photoURL, uid, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if (!ok) return dispatch( logout({errorMessage}));

        dispatch( login({uid, displayName, email, photoURL}));

    }
}