"use client";

import { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import getUnreadMessageCount from "@/actions/getUnreadMessageCount";

export const MessageContext = createContext<{
  unreadMessageCount: number;
  handleSetUnreadMessageCount: (count: number) => void;
} | null>(null);

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      getUnreadMessageCount().then((res) => {
        if (res.count) {
          setUnreadMessageCount(res.count);
        }
        
      });
    }
  }, [getUnreadMessageCount, session]);

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
