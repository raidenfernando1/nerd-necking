import { create } from "zustand";

interface UserDataType {
  anonUserData: { username: string; receiverID: string };
}

interface AnonUserType {
  anonUserData: {
    username: string;
    receiverID: string;
  };
  setAnonUserData: (partial: Partial<UserDataType>) => void;
}

export const useAnonData = create<AnonUserType>((set) => ({
  anonUserData: {
    username: "",
    receiverID: "",
  },

  setAnonUserData: (partial) =>
    set((state) => ({
      ...state,
      ...partial,
    })),
}));
