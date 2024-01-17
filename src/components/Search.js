import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../RTK/slice/SearchSlice";
import { fetchAllProduct } from "../RTK/slice/ProductSlice";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

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
        e.preventDefault();
      }
    }
  };

  return (
    <div className="order-4 px-2 flex lg:order-none text-center">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
        className="px-5 py-2 w-fit outline-none text-font rounded-l-md xl:w-[400px]"
      />
      <button
        onClick={handleSearchClick}
        className=" bg-black px-2 md:px-5 py-2 rounded-r-md"
      >
        <span className=" md:hidden">
          <CiSearch />
        </span>
        <span className="hidden md:block">Search</span>
      </button>
    </div>
  );
}

export default Search;
