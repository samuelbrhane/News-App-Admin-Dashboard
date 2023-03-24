import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <section className=" bg-gray-100 py-4 shadow-md">
      <div className="flex items-center max-w-7xl mx-auto justify-between px-2 md:px-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          News<span className="text-[#4d75cc]">Grid</span>
        </h1>
        <form className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 md:py-2 pr-8 rounded-lg md:w-[300px] bg-[#4d75cc] outline-none text-white"
          />
          <AiOutlineSearch className="absolute top-2 right-1 text-white text-xl cursor-pointer" />
        </form>
      </div>
    </section>
  );
};

export default Header;
