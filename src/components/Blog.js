import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../RTK/slice/BlogSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Blog() {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog);
  const { blogStatu, blog } = blogState || {};

  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    if (blogStatu === "idle") {
      dispatch(fetchBlog());
    }
  }, [dispatch, blogStatu]);

  const sliderSettings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const isXLScreen = window.innerWidth >= 1280;

  return (
    <>
      <div className="py-10 realtive flex justify-between">
        <h1 className="text-xl md:text-2xl cursor-pointer">Latest Blogs</h1>
        <div className="flex xl:hidden ">
          <button
            onClick={handlePrev}
            className="hover:text-primary duration-300"
          >
            <IoIosArrowBack size={30} />
          </button>
          <span className="w-[1px] bg-dark h-10 mx-5 "></span>
          <button
            onClick={handleNext}
            className="hover:text-primary duration-300"
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
      {isXLScreen ? (
        <div className="grid mr-5 lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 p-5 bg-white h-full">
          {blog.map((blogData) => (
            <div
              onMouseOver={() => setActiveBlog(blogData.id)}
              onMouseLeave={() => setActiveBlog(null)}
              key={blogData.id}
            >
              <div className="relative">
                <img src={blogData.img} alt="" />

                {activeBlog === blogData.id && (
                  <CiSearch
                    className={`absolute top-[40%] left-[45%] text-5xl border-2 cursor-pointer duration-300 rounded-full p-1 text-white z-10 ${
                      activeBlog
                        ? "hover:bg-primary hover:border-primary scale-100"
                        : ""
                    }`}
                  />
                )}
                <div
                  className={
                    activeBlog === blogData.id
                      ? "w-full h-full top-0 opacity-30 cursor-pointer duration-500 bg-black z-0 absolute"
                      : ""
                  }
                ></div>
              </div>
              <div>
                <h1 className="text-font cursor-pointer text-xl my-3">
                  {blogData.title}
                </h1>
                <p className="text-dark">{blogData.blog.slice(0, 50)}...</p>
              </div>
              <button className="text-primary mt-3 cursor-pointer hover:text-font duration-300">
                Read More.. {" > "}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Slider ref={sliderRef} className="bg-white p-5" {...sliderSettings}>
          {blog.map((blogData) => (
            <div
              onMouseOver={() => setActiveBlog(blogData.id)}
              onMouseLeave={() => setActiveBlog(null)}
              key={blogData.id}
              className="px-3"
            >
              <div className="relative">
                <img src={blogData.img} alt="" />

                {activeBlog === blogData.id && (
                  <CiSearch
                    className={`absolute top-[40%] left-[45%] text-5xl border-2 cursor-pointer duration-300 rounded-full p-1 text-white z-10 ${
                      activeBlog
                        ? "hover:bg-primary hover:border-primary scale-100"
                        : ""
                    }`}
                  />
                )}
                <div
                  className={
                    activeBlog === blogData.id
                      ? "w-full h-full top-0 opacity-30 cursor-pointer duration-500 bg-black z-0 absolute"
                      : ""
                  }
                ></div>
              </div>
              <div>
                <h1 className="text-font cursor-pointer text-xl my-3">
                  {blogData.title}
                </h1>
                <p className="text-dark">{blogData.blog.slice(0, 50)}...</p>
              </div>
              <button className="text-primary mt-3 cursor-pointer hover:text-font duration-300">
                Read More.. {" > "}
              </button>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}

export default Blog;
