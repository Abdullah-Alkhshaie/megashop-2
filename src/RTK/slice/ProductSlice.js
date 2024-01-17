import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProduct = createAsyncThunk(
  "allProduct/fetchAllProduct",
  async () => {
    const respone = await axios.get("/jsonfiles/allproduct.json");
    return respone.data;
  }
);

export const fetchFeaturedProduct = createAsyncThunk(
  "featuredProduct/fetchFeaturedProduct",
  async () => {
    const respone = await axios.get("/jsonfiles/featured.json");
    return respone.data;
  }
);

export const fetchLatestProduct = createAsyncThunk(
  "latestProduct/fetchLatestProduct",
  async () => {
    const respone = await axios.get("/jsonfiles/latest.json");
    return respone.data;
  }
);

export const fetchSpecialProduct = createAsyncThunk(
  "specialProduct/fetchSpecialProduct",
  async () => {
    const respone = await axios.get("/jsonfiles/sepical.json");
    return respone.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProduct: [],
    featuredProduct: [],
    latestProduct: [],
    specialProduct: [],
    alltStatu: "idle",
    featuredStatu: "idle",
    latestStatu: "idle",
    specialStatu: "idle",
    selectedCategory: null,
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.alltStatu = "loading";
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.alltStatu = "succeeded";
        state.allProduct = action.payload;
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        state.alltStatu = "failed";
        state.allProduct = action.error.message;
      })
      .addCase(fetchFeaturedProduct.pending, (state) => {
        state.featuredStatu = "loading";
      })
      .addCase(fetchFeaturedProduct.fulfilled, (state, action) => {
        state.featuredStatu = "succeeded";
        state.featuredProduct = action.payload;
      })
      .addCase(fetchFeaturedProduct.rejected, (state, action) => {
        state.featuredStatu = "failed";
        state.featuredProduct = action.error.message;
      })
      .addCase(fetchLatestProduct.pending, (state) => {
        state.latestStatu = "loading";
      })
      .addCase(fetchLatestProduct.fulfilled, (state, action) => {
        state.latestStatu = "succeeded";
        state.latestProduct = action.payload;
      })
      .addCase(fetchLatestProduct.rejected, (state, action) => {
        state.latestStatu = "failed";
        state.latestProduct = action.error.message;
      })
      .addCase(fetchSpecialProduct.pending, (state) => {
        state.specialStatu = "loading";
      })
      .addCase(fetchSpecialProduct.fulfilled, (state, action) => {
        state.specialStatu = "succeeded";
        state.specialProduct = action.payload;
      })
      .addCase(fetchSpecialProduct.rejected, (state, action) => {
        state.specialStatu = "failed";
        state.specialProduct = action.error.message;
      });
  },
});

export const { setSelectedCategory, updateSelectedCategory } =
  productSlice.actions;

export default productSlice.reducer;
