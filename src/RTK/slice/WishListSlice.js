import { createSlice } from "@reduxjs/toolkit";

const getItemLocalStorage = () => {
  try {
    const wishListData = localStorage.getItem("wishlist");
    return wishListData ? JSON.parse(wishListData) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const setItemLocalStorage = (wishlist) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } catch (error) {
    console.log(error);
  }
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: { items: getItemLocalStorage() },
  reducers: {
    addToWishList: (state, action) => {
      const { id, name, img, newprice, oldprice, quantity, availabilty } =
        action.payload;
      const existingProduct = state.items.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({
          id,
          name,
          img,
          newprice,
          oldprice,
          availabilty,
          quantity,
        });
      }
      setItemLocalStorage(state.items);
    },
    removeFromWishList: (state, action) => {
      const { id } = action.payload;
      const updatedWishList = state.items.filter(
        (product) => product.id !== id
      );
      setItemLocalStorage(updatedWishList);
      return { ...state, items: updatedWishList };
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
