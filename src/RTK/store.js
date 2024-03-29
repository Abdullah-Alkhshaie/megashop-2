import { configureStore } from "@reduxjs/toolkit";
import { blogSliceReducer } from "./slice/BlogSlice";
import CartSlice from "./slice/CartSlice";
import productSlice from "./slice/ProductSlice";
import SearchSlice from "./slice/SearchSlice";
import WishListSlice from "./slice/WishListSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    search: SearchSlice,
    blog: blogSliceReducer,
    cart: CartSlice,
    wishList: WishListSlice,
  },
});

export default store;
