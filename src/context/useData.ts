import { create } from "zustand";

interface AppDataTypes {
  username: string;
  receiverID: string;
  inboxCount: number | null;
  setUsername: (username: string) => void;
  setReceiverID: (receiverID: string) => void;
  setInboxCount: (count: number) => void;
}

export const useData = create<AppDataTypes>((set) => ({
  username: "",
  receiverID: "",
  inboxCount: null,
  setUsername: (username) => set({ username: username }),
  setReceiverID: (receiverID) => set({ receiverID: receiverID }),
  setInboxCount: (count) => set({ inboxCount: count }),
}));
