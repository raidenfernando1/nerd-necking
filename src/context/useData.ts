import { create } from "zustand";

interface MessagesType {
  message_content: string;
  timestamp: string;
}

interface AppDataTypes {
  username: string;
  messages: MessagesType[];
  receiverID: string;
  inboxCount: number | null;
  setUsername: (username: string) => void;
  setMessages: (messages: MessagesType[]) => void;
  setReceiverID: (receiverID: string) => void;
  setInboxCount: (count: number) => void;
}

export const useData = create<AppDataTypes>((set) => ({
  username: "",
  messages: [],
  receiverID: "",
  inboxCount: null,
  setUsername: (username) => set({ username: username }),
  setMessages: (newMessages) => set({ messages: newMessages }),
  setReceiverID: (receiverID) => set({ receiverID: receiverID }),
  setInboxCount: (count) => set({ inboxCount: count }),
}));
