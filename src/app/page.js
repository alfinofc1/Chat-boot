"use client";
import { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Navbar from "@/components/Navbar";
import ChatFrom from "@/components/ChatFrom";
import ChatMessage from "@/components/ChatMessage";
import { aiResponse } from "./api/chatBot";
import { toast } from "react-toastify";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const generateBotResponse = async (messages) => {
    try {
      const res = await aiResponse(messages);
      const botResponse =
        res?.choices[0]?.message?.content ||
        "Sorry, I couldn't understand that.";
      setChatHistory((prvChat) => [
        ...prvChat.filter((msg) => msg.content !== "Thinking..."),
        { role: "bot", content: botResponse },
      ]);
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <div
        id="menubar"
        className={`w-56 lg:w-64 h-screen  py-5 px-3 border-r bg-gray-200 dark:bg-[#171717] border-gray-400 dark:border-gray-800 
          ${
            menuOpen
              ? "block shadow-2xl shadow-gray-700 md:shadow-sm absolute backdrop-brightness-75 z-50"
              : "hidden"
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

      <div className="flex flex-col flex-1 ml-0  relative">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-40">
          <Navbar handleMenu={handleMenu} menuOpen={menuOpen} />
        </div>

        <div
          className={`flex-1 mt-16 mb-6 overflow-y-auto px-4 scrollbar ${
            menuOpen && "overflow-y-hidden md:overflow-y-auto"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>
        </div>

        {/* Fixed Chat Form at Bottom */}
        <div className="sticky bottom-4 left-0 right-0">
          <ChatFrom
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}
