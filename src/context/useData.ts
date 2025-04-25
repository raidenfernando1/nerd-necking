import { create } from "zustand";

interface AppDataTypes {
  username: string;
  inboxCount: number | null;
  setUsername: (username: string) => void;
  setInboxCount: (count: number) => void;
}

export const useData = create<AppDataTypes>((set) => ({
  username: "",
  inboxCount: null,
  setUsername: (username) => set({ username: username }),
  setInboxCount: (count) => set({ inboxCount: count }),
}));
