import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../RTK/slice/SearchSlice";
import { fetchAllProduct } from "../RTK/slice/ProductSlice";
import { useNavigate } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      dispatch(fetchAllProduct());
      navigate("/productlist");
      dispatch(setSearchTerm(""));
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchTerm.trim() !== "") {
        dispatch(fetchAllProduct());
        navigate("/productlist");
      } else {
        // Prevent the default behavior of the Enter key
        e.preventDefault();
      }
    }
  };

  return (
    <div className="order-4 lg:order-none text-center">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
        className="px-5 py-2 outline-none text-font rounded-l-md md:w-[400px]"
      />
      <button
        onClick={handleSearchClick}
        className="bg-black px-5 py-2 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
