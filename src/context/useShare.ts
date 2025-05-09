import { create } from "zustand";

interface ShareImageTypes {
  message: string;
  setMessage: (newMessage: string) => void;
}

export const useShare = create<ShareImageTypes>((set) => ({
  message: "",
  setMessage: (newMessage: string) => set({ message: newMessage }),
}));
