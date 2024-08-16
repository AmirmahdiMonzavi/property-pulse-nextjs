"use client";

import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useSession } from "next-auth/react";
import getUnreadMessageCount from "@/actions/getUnreadMessageCount";

export const MessageContext = createContext<{
  unreadMessageCount: number;
  setUnreadMessageCount: Dispatch<SetStateAction<number>>;
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

  return (
    <MessageContext.Provider
      value={{ unreadMessageCount, setUnreadMessageCount }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
