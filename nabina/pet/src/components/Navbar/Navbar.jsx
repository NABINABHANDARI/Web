import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPerson, MdFavorite, MdShoppingCart } from 'react-icons/md';
import { AiOutlineDown } from "react-icons/ai";
import Logo from "./Logo";
import Contact1 from "./Contact1";
import Search from "./Search";
import Nav2Link from "./Nav2Link";

const Navbar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <>
      {/* Top Navbar with Logo, Search, and Contact */}
      <nav className="bg-white py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <Logo />
          <Search />
          <Contact1 />
        </div>
        <hr className="mt-7" />
      </nav>

      {/* Main Navbar with Dropdown and Links */}
      <nav className="hidden lg:flex items-center min-h-[70px] bg-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Shop by Category */}
          <div className="relative">
            <button
              onClick={toggleCategory}
              className="text-black text-lg flex items-center"
              style={{ fontFamily: "Chilanka, cursive" }}
            >
              Shop by Category <AiOutlineDown className="ml-1 text-sm" />
            </button>
            {categoryOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg">
                <Link to="/food" className="block px-4 py-2 text-black text-sm" style={{ fontFamily: "Chilanka, cursive" }}>Food</Link>
                <Link to="/clothes" className="block px-4 py-2 text-black text-sm" style={{ fontFamily: "Chilanka, cursive" }}>Clothes</Link>
                <Link to="/toy" className="block px-4 py-2 text-black text-sm" style={{ fontFamily: "Chilanka, cursive" }}>Toy</Link>
              </div>
            )}
          </div>
          <Nav2Link />

          {/* Logos on the Right */}
          <div className="flex items-center space-x-4">
            <MdPerson className="text-2xl" />
            <MdFavorite className="text-2xl" />
            <MdShoppingCart className="text-2xl" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
