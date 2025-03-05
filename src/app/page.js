"use client";
import { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Navbar from "@/components/Navbar";
import ChatFrom from "@/components/ChatFrom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex relative h-screen">
        <div
          id="menubar"
          className={`w-56 lg:w-64 h-full  py-5 px-3 border-r bg-gray-200 dark:bg-[#171717] border-gray-400 dark:border-gray-800 ${
            menuOpen
              ? "block shadow-2xl shadow-gray-700 md:shadow-sm absolute backdrop-brightness-75  z-50 "
              : "hidden shadow "
          } md:block`}
        >
          <div className="flex items-center gap-2 relative">
            <Image
              src="/assets/logo.png"
              width={36}
              height={36}
              alt="Logo"
              className="rounded-full dark:bg-white"
            />
            <h4 className="text-xl font-semibold font-roboto dark:text-white">
              Chat Bot
            </h4>
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-0 md:hidden"
            >
              <IoMdClose className="size-6 dark:fill-white" />
            </button>
          </div>
        </div>
        <div className={`w-full relative mx-2`}>
          <Navbar
            handleMenu={handleMenu}
            menuOpen={menuOpen}
            className="mb-6"
          />
          <div className="message-container container mx-auto relative mt-4">
            <div className="user-message ">
              <p>Lorem 
              </p>
            </div>
            <div className="bot-message ">
              <p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem loremLorem lorem Lorem loremLorem lorem Lorem loremLorem lorem Lorem loremLorem lorem Lorem loremLorem lorem Lorem loremLorem lorem Lorem lorem
              </p>
            </div>
          </div>
          <ChatFrom />
        </div>
      </div>
    </div>
  );
}
