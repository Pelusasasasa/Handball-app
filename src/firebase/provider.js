import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {

        const res = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, photoURL, uid} = res.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        };
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;


        return {
            ok: false,
            errorMessage, errorCode
        };
    }
}