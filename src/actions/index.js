import { auth, provider } from "../firebase.js";
import { SET_USER } from "./actionType.js";

export const setUser=(payload)=>({
    type:SET_USER,
    user:payload,
})
export function singInAPI() {
    return (dispatch) => {
        auth
            .signInWithPopup(provider)
            .then((payload) => {
                dispatch(setUser(payload.user))
            }).catch((error) => console.log(error.message))
    }
}