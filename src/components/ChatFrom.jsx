"use client";
import { useEffect, useRef, useState } from "react";
import { SiProbot } from "react-icons/si";
import { BsGlobe2 } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { BiSend } from "react-icons/bi";
import useChat from "@/hooks/useChat";

const ChatForm = ({ generateBotResponse }) => {
  const {
    chatHistory,
    setChatHistory,
    setNewChat,
    startNewChat,
    currentChat,
  } = useChat();
  const textareaRef = useRef(null);
  const fileInput = useRef(null);
  const [searchbar, setSearchbar] = useState(false);
  const MAX_ROW = 7;

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    function isScrollable(el) {
      return (
        el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight
      );
    }

    const handleInput = (e) => {
      const el = e.target;
      if (isScrollable(el) && el.rows < MAX_ROW) {
        el.rows += 1;
      }
      if (!el.value) {
        el.rows = 2;
      }
    };

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewChat(false);
    const userMessage = textareaRef.current.value.trim();
    if (!userMessage) return;
    textareaRef.current.value = "";
    const updatedMessage = [
      ...chatHistory,
      { role: "user", content: userMessage },
    ];
    // set chat in history
    if (!currentChat) {
      startNewChat();
      setChatHistory(updatedMessage);
    }
    setChatHistory(updatedMessage);
    setTimeout(() => {
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: "bot", content: "Thinking..." },
      ]);
      generateBotResponse({ role: "user", content: userMessage });
    }, 400);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 rounded-xl shadow-sm py-4 px-3 bg-white dark:bg-[#212121]"
      >
        <textarea
          ref={textareaRef}
          id="my-textarea"
          placeholder="Ask me anything"
          rows={2}
          className="pb-3 w-full border-none focus:outline-none dark:placeholder:text-gray-300 dark:text-white scrollbar resize-none"
        ></textarea>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <div
              className="p-1 px-3 border border-gray-400 flex items-center gap-1 w-fit rounded-full dark:text-gray-300
            text-base font-normal"
            >
              <SiProbot className="dark:fill-gray-300" />
              v-Beta
            </div>
            <div
              onClick={() => setSearchbar(!searchbar)}
              className={`p-1 px-3 border border-gray-400 flex items-center gap-1 w-fit rounded-full dark:text-gray-300
            text-base font-normal ${searchbar && "bg-[#1A416A]"}`}
            >
              <BsGlobe2 className="dark:fill-gray-300" />
              Search
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div>
              <button
                onClick={() => fileInput.current.click()}
                disabled={searchbar}
              >
                <IoIosAttach
                  className={`size-7 dark:fill-gray-300 ${
                    searchbar
                      ? "cursor-not-allowed opacity-25"
                      : "cursor-pointer"
                  }`}
                />
              </button>
              <input ref={fileInput} type="file" className="hidden" />
            </div>
            <button type="submit" className="cursor-pointer">
              <BiSend className="size-7 fill-blue-400" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatForm;
