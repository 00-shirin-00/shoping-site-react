import authSliceReducer from "./Slice/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        cart:CartSlice
    }
})
export default store