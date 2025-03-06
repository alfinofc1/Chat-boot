import useChat from "@/hooks/useChat";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { RiChatNewLine } from "react-icons/ri";
const SidebarContent = ({ setMenuOpen, setNewChat }) => {
  const {chatSessions, loadChat} = useChat();
  return (
    <div>
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
      <button
        onClick={() => setNewChat(true)}
        className="flex items-center justify-center gap-3 py-2 px-2 border border-gray-500 mt-4 dark:text-white font-roboto font-medium rounded-md w-full max-w-48 mx-auto cursor-pointer"
      >
        <RiChatNewLine className="size-5 dark:fill-white" />
        New Chat
      </button>
      {chatSessions.map((chat) => (
        <button
          key={chat.id}
          onClick={() => loadChat(chat.id)}
          className="  py-2 px-3  dark:text-white"
        >
          {chat.name}
        </button>
      ))}
    </div>
  );
};

export default SidebarContent;
