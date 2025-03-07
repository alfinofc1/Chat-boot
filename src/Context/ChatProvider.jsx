"use client";
import { createContext,  useState } from "react";

export const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [newChat, setNewChat] = useState(true);
  const [chatHistory, setChatHistory] = useState([]);
  const [chatSessions, setChatSessions] = useState(() => {
    return JSON.parse(localStorage.getItem("chatSessions")) || [];
  });
  const [currentChat, setCurrentChat] = useState(null);
  console.log(chatSessions)
  const startNewChat = () => {
    const newChatId = crypto.randomUUID();
    const newChatName = `Chat ${chatSessions.length + 1}`;
    const newChat = { id: newChatId, name: newChatName, messages: [] };
    const updateSession = [newChat, ...chatSessions];
    setChatSessions(updateSession);
    setCurrentChat(newChat);
    setChatHistory([]);
  };

  const saveChatHistory = (newMessage) => {
    if (!currentChat) return;
    const updatedSession = chatSessions.map((chat) =>
      chat.id === currentChat.id ? { ...chat, messages: [...newMessage] } : chat
    );
    setChatSessions(updatedSession);
    localStorage.setItem("chatSessions", JSON.stringify(updatedSession));
  };
  const loadChat = (chatId) => {
    const selectedChat = chatSessions.find((chat) => chat.id === chatId);
    if (selectedChat) {
        setNewChat(false)
      setCurrentChat(selectedChat);
      setChatHistory(selectedChat.messages);
    }
  };
  const chatInfo = {
    chatHistory,
    setChatHistory,
    chatSessions,
    setChatSessions,
    currentChat,
    setCurrentChat,
    newChat,
    setNewChat,
    startNewChat,
    saveChatHistory,
    loadChat,
  };
  return (
    <ChatContext.Provider value={chatInfo}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
