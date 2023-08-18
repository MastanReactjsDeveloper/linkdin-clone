import {legacy_createStore as createStore,applyMiddleware} from  "redux";
import thunkMiddleWare from "redux-thunk";

import rootReducer from "../reducers/userReducer"

const store=createStore(rootReducer,applyMiddleware(thunkMiddleWare))

export default store;