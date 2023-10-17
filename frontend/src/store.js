import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice.js";
import cartSliceReducer from "./slices/cartSlice.js";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        cart: cartSliceReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
});

// store.subscribe(() => {
//     const cartState = store.getState().cart;
//     const cartItems = cartState.cartItems; // Get only the cartItems from the state
//     localStorage.setItem("cart", JSON.stringify({ cartItems })); // Store only cartItems in local storage
//   });
  console.log("Store State:", store.getState());

export default store;