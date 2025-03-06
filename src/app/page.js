"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ChatFrom from "@/components/ChatFrom";
import ChatMessage from "@/components/ChatMessage";
import { aiResponse } from "./api/chatBot";
import { toast } from "react-toastify";
import SidebarContent from "@/components/SidebarContent";
import useChat from "@/hooks/useChat";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { chatHistory, setChatHistory, newChat, setNewChat, saveChatHistory } =
    useChat();
  useEffect(() => {
    // Ensure we're on the client side before calling saveChatHistory
    if (typeof window !== "undefined" && chatHistory.length) {
      saveChatHistory(chatHistory); // Save chat history to localStorage
    }
  }, [chatHistory]);
  //ai response
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
      {/* sideBar */}
      <div
        id="menubar"
        className={`w-56 lg:w-64 h-screen  py-5 px-3 border-r bg-gray-200 dark:bg-[#171717] border-gray-400 dark:border-gray-800 
          ${
            menuOpen
              ? "block shadow-2xl shadow-gray-700 md:shadow-sm absolute md:relative backdrop-brightness-75 z-50"
              : "hidden"
          } md:block`}
      >
        <SidebarContent setMenuOpen={setMenuOpen} setNewChat={setNewChat} />
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
          {/* conversetion */}
          {newChat ? (
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2  w-full">
              <p className="text-xl md:text-2xl lg:text-3xl text-center text-gray-600 dark:text-white font-semibold mx-2">
                Welcome! Ask me anything, and I&apos;ll do my best to help.
              </p>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>
          )}
        </div>

        {/* Chat input */}
        <div className="sticky bottom-4 left-0 right-0 mx-2 sm:mx-8">
          <ChatFrom generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
}
