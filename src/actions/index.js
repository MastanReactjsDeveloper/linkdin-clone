import { upload } from "@testing-library/user-event/dist/upload.js";
import { auth, provider, storage } from "../firebase.js";
import { SET_USER } from "./actionType.js";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})
export function singInAPI() {
    return (dispatch) => {
        auth
            .signInWithPopup(provider)
            .then((payload) => {
                console.log(payload.user)
                dispatch(setUser(payload.user))
            }).catch((error) => console.log(error.message))
    }
};

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

export function signOutAPI() {
    return(dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        }).catch((error) => {
            console.log(error.message)
        })
    }
}

export function postArticleAPI(payload){
    return (dispatch)=>{
        if(payload.image !== ""){
            return upload=storage.ref(`images/${payload.image.name}`)
            .put(provider.image)
        }
        upload.on('state_change',(snapshot)=>
        {
            const progress= (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            });
            console.log(`progress :${progress}%`)
        }
    }
    
