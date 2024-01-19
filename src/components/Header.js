import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { TbUserFilled } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const wishList = useSelector((state) => state.wishList.items);
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully logged out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const wishListLength = wishList.length;

  const handleWishlistClick = () => {
    if (!user) {
      // Show toast message and prevent navigating to the wishlist
      toast.error("Please sign in to access the wishlist");
    } else {
      // User is signed in, navigate to the wishlist
      navigate("/wishlist");
    }
  };

  return (
    <div className="w-full flex-col md:flex-row py-2 bg-red-600 flex md:px-5 lg:px-16 items-center text-white justify-between">
      <p className="text-sm mb-2">
        Wants to explore Upcoming Deals on Weekends?
      </p>
      <div className="flex items-center gap-10">
        <button className="cursor-pointer" onClick={handleWishlistClick}>
          Wish List ({wishListLength})
        </button>
        {user ? (
          <>
            <div className="relative inline-block">
              <span
                onClick={() => setShowMenu(!showMenu)}
                className="cursor-pointer flex item items-center"
              >
                My Account
                {showMenu ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
              {showMenu && (
                <div className="absolute right-[5%] lg:right-[30%] top-16 md:top-10  flex flex-col gap-y-2 items-start text-dark  z-10 w-[200px] bg-white round rounded-sm py-2 px-4 mt-1 border border-gray">
                  <button
                    onClick={closeMenu}
                    className="flex items-center gap-2 hover:text-font"
                  >
                    <TbUserFilled size={20} /> {user.displayName}
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      closeMenu();
                    }}
                    className="flex items-center gap-2 hover:text-font"
                  >
                    <IoLogInOutline size={20} /> LogOut
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div>
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="cursor-pointer flex item items-center"
            >
              My Account{" "}
              {showMenu ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
            {showMenu && (
              <div className="absolute right-[5%] lg:right-[30%] top-16 md:top-10  flex flex-col gap-y-2 items-start text-dark  z-10 w-[200px] bg-white round rounded-sm py-2 px-4 mt-1 border border-gray">
                <Link to="/SignIn">
                  <button
                    onClick={closeMenu}
                    className="flex items-center gap-2 hover:text-font"
                  >
                    <TbUserFilled size={20} /> Register
                  </button>
                </Link>
                <Link to="/Login">
                  <button
                    onClick={closeMenu}
                    className="flex items-center gap-2 hover:text-font"
                  >
                    <IoLogInOutline size={20} /> Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Header;
