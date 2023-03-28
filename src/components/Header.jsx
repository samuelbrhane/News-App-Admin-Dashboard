import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <section className="bg-gray-100 py-4 shadow-md h-[70px] fixed left-0 w-full z-50">
      <div className="flex items-center max-w-7xl mx-auto justify-between px-2 md:px-4">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold hidden lg:inline">
          News<span className="text-[#4d75cc]">Grid</span>
        </h1>
        <form className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 pr-8 rounded-lg w-[300px] bg-[#231a23] text-white outline-none "
          />
          <AiOutlineSearch className="absolute top-2 right-1 text-white text-xl cursor-pointer" />
        </form>
        <BiMenuAltLeft
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        />
      </div>
    </section>
  );
};

export default Header;
