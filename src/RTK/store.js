import { configureStore } from "@reduxjs/toolkit";
import { blogSliceReducer } from "./slice/BlogSlice";
import productSlice from "./slice/ProductSlice";
import SearchSlice from "./slice/SearchSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    search: SearchSlice,
    blog: blogSliceReducer,
  },
});

export default store;
