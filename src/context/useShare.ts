import { create } from "zustand";

interface ShareTypes {
  shareMessage: string;
  setShareMessage: (newMessage: string) => void;
}

export const useShare = create<ShareTypes>((set) => ({
  shareMessage: "",
  setShareMessage: (newMessage: string) => set({ shareMessage: newMessage }),
}));
