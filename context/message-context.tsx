"use client";

import { createContext, useState } from "react";

const MessageContext = createContext<{
  unreadMessageCount: number;
  handleSetUnreadMessageCount: (count: number) => void;
} | null>(null);

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);

  const handleSetUnreadMessageCount = (count: number) => {
    setUnreadMessageCount(count);
  };

  return (
    <MessageContext.Provider
      value={{ unreadMessageCount, handleSetUnreadMessageCount }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
