import {configureStore} from "@reduxjs/toolkit" 
import rootReducers from "./Reducer/Combine"

const store = configureStore({reducer:rootReducers});

export default store;