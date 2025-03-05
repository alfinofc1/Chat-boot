import Image from "next/image";

const ChatMessage = ({ chat }) => {
  console.log(chat);
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
        <p>{chat.text} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid quia officia tenetur, nostrum laudantium minima obcaecati dicta consequuntur nobis sint neque error, tempore eius quasi debitis aut officiis quo.</p>
      </div>
    </div>
  );
};

export default ChatMessage;
