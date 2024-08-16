import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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
};

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = res.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName});


        return{
            ok: true,
            uid, email, displayName, photoURL
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
};

export const loginWithUserPassword = async({email, password}) =>{
    try {
        const {uid, photoURL, displayName} = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        return {
            ok:true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}