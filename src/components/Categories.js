import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAllProduct,
  setSelectedCategory,
} from "../RTK/slice/ProductSlice";

function Categories() {
  const dispatch = useDispatch();
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const navigate = useNavigate();

  // Assuming state.products.allProduct is an array
  const category = useSelector((state) => state.products.allProduct || []);
  const statu = useSelector((state) => state.products.alltStatu);

  useEffect(() => {
    if (statu === "idle") {
      dispatch(fetchAllProduct());
    }
  }, [dispatch, statu]);

  useEffect(() => {
    // Ensure that category is an array before using map
    const categories = Array.isArray(category)
      ? [...new Set(category.map((item) => item.category))]
      : [];
    setUniqueCategories(categories);
  }, [category]);

  const handleCategory = (categoryId) => {
    dispatch(setSelectedCategory(categoryId));
    navigate("productlist");
  };

  return (
    <div className="leading-10 pl-5 mt-3">
      {uniqueCategories.map((item, i) => (
        <h1
          className={`capitalize text-dark hover:text-black duration-300 cursor-pointer`}
          key={i}
          onClick={() => handleCategory(item)}
        >
          {item}
        </h1>
      ))}
    </div>
  );
}

export default Categories;
