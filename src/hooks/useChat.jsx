import { ChatContext } from "@/Context/ChatProvider";
import { useContext } from "react";


const useChat = () => {
    const chat = useContext(ChatContext)
    return chat
};

export default useChat;