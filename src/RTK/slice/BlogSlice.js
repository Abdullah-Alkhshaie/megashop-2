import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async () => {
  const response = await axios.get("/jsonfiles/blog.json");
  return response.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
    blogStatu: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.blogStatu = "loading...";
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.blogStatu = "succeeded";
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.blogStatu = "failed";
        state.blog = action.error.message;
      });
  },
});

export const blogSliceReducer = blogSlice.reducer;

export default blogSlice;
