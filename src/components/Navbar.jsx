"use client";

import { useContext } from "react";
import Image from "next/image";
import { IoMdMenu, IoIosMoon } from "react-icons/io";
import { LuSunDim } from "react-icons/lu";
import { ThemeContext } from "@/Context/ThemeProvider";

const Navbar = ({ handleMenu, menuOpen }) => {
  const { theme, toggleTheme} = useContext(ThemeContext);

  return (
    <nav className="w-full flex items-center justify-between py-3 px-4 ">
      <div>
        <div className={`md:hidden flex items-center gap-2 ${menuOpen ? "hidden" : "flex"}`}>
          <button onClick={handleMenu}>
            <IoMdMenu className="size-6 dark:fill-white" />
          </button>
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.png" width={36} height={36} alt="Logo" className="rounded-full dark:bg-white"/>
            <h4 className="text-xl font-semibold font-roboto dark:text-white">Chat Bot</h4>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === "light" ? <LuSunDim className="size-6" /> : <IoIosMoon className="size-6 fill-white" />}
        </button>
        <button className="py-2 px-3 bg-blue-500 text-white rounded-sm font-normal cursor-pointer select-none">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
