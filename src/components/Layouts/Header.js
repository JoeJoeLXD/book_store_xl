// src/components/Layouts/Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "../Sections/Search"; 
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";
import { useCart } from "../../context"; 

const Header = () => {
  const { cartList } = useCart();


  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <nav className="container mx-auto flex justify-between items-center py-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-10 w-10 mr-3" alt="CodeBook Logo" />
            <span className="text-2xl font-semibold dark:text-white">
              CodeBook
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <span
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-gear-wide-connected"
          ></span>
          <span
            onClick={() => setSearchSection(!searchSection)}
            className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-search"
          ></span>
          <Link to="/cart" className="relative text-gray-700 dark:text-white">
            <span className="text-2xl bi bi-cart-fill">
              <span className="absolute text-white text-sm -top-2 left-2.5 bg-rose-500 px-1 rounded-full">
                {cartList.length}
              </span>
            </span>
          </Link>
          <span
            onClick={() => setDropdown(!dropdown)}
            className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
          ></span>
          {dropdown &&
            (token ? (
              <DropdownLoggedIn setDropdown={setDropdown} />
            ) : (
              <DropdownLoggedOut setDropdown={setDropdown} />
            ))}
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};

export default Header;
