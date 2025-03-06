import Image from "next/image";

const ChatMessage = ({ chat }) => {
  return (
    <div className="flex items-start gap-2">
      {chat?.role === "bot" && (
        <Image
          src={"/assets/logo.png"}
          width={24}
          height={24}
          alt="logo"
          className="dark:bg-white rounded-full"
        />
      )}
      <div className={`${chat?.role === "bot" ? "bot" : "user"}-message `}>
        <p>{chat.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
