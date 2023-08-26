// import { upload } from "@testing-library/user-event/dist/upload.js";
import { auth, provider, storage } from "../firebase.js";
import { SET_USER } from "./actionType.js";
import db from "../firebase"
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
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null));
        }).catch((error) => {
            console.log(error.message)
        })
    }
}

// export function postArticleAPI(payload) {
//     return (dispatch) => {
//         if (payload.image !== "") {
//             const upload = storage.ref(`images/${payload.image.name}`)
//                 .put(payload.image)
        
//         upload.on('state_changed', (snapshot) => {
//             const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//             console.log(`progress :${progress}%`)
//             if(snapshot.state === "RUNNING"){
//                 console.log(`progress:${progress}%`)
//             }
//         },error=>console.log(error.code),
//         async ()=>{
//             const downloadURL=await upload.snapshot.ref.getDownloadURL();
//              db.collection("articles").add({
//                 actor:{
//                     description:payload.user.email,
//                     title:payload.user.displayName,
//                     date:payload.timestap,
//                     image:payload.user.photoURL,
//                 },
//                 video:payload.video,
//                 shareImg:downloadURL,
//                 comments:0,
//                 description:payload.description,
//              });
//         }
//         );
//     }
// }

// }
export function postArticleAPI(payload) {
    return async (dispatch) => {
        try {
            if (!payload.image) {
                throw new Error("No image provided in the payload.");
            }

            const imageRef = storage.ref(`images/${payload.image.name}`);
            const uploadTask = imageRef.put(payload.image);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Progress: ${progress}%`);
                    if (snapshot.state === "running") {
                        console.log(`Progress: ${progress}%`);
                        // Update UI with progress if needed
                    }
                },
                (error) => {
                    console.error("Error uploading image:", error);
                    // Handle the error, possibly show a user-friendly message
                    throw error; // Propagate the error to the next catch block
                }, async () => {
                    try {
                        const downloadURL = await imageRef.getDownloadURL();

                        const articleData = {
                            actor: {
                                description: payload.user.email,
                                title: payload.user.displayName,
                                date: payload.timestamp,
                                image: payload.user.photoURL,
                            },
                            video: payload.video,
                            shareImg: downloadURL,
                            comments: 0,
                            description: payload.description,
                        };

                        await db.collection("articles").add(articleData);

                        console.log("Article posted successfully!");
                        // Dispatch a success action if using Redux
                    } catch (error) {
                        console.error("Error adding article data to Firestore:", error);
                        // Dispatch an error action if using Redux or handle the error in your UI
                    }
                }
            );
        } catch (error) {
            console.error("Error posting article:", error);
            // Dispatch an error action if using Redux or handle the error in your UI
        }
    };
}
