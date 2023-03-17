import handleCart from "./handleCart";
import wishlist from "./WishList";
import {combineReducers} from "@reduxjs/toolkit"
const rootReducers = combineReducers(
    {
       handleCart,wishlist
      }
);
export default rootReducers;