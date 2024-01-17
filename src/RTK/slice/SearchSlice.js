import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  status: "idle",
  error: null,
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.status = "succeeded";
    },
    setSearchStatus: (state, action) => {
      state.status = action.payload;
    },
    setSearchError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setSearchResults,
  setSearchStatus,
  setSearchError,
  setSearchTerm,
} = searchSlice.actions;

export default searchSlice.reducer;
