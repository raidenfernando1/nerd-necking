import { create } from "zustand";

interface MessagesType {
  message_content: string;
  timestamp: string;
}

interface UserDataType {
  user: { username: string; receiver_id: string };
  messages: MessagesType[];
  inboxCount: number | null;
}

interface AppDataTypes {
  userData: UserDataType;
  setUserData: (partial: Partial<UserDataType>) => void;
}

export const useData = create<AppDataTypes>((set) => ({
  userData: {
    user: { username: "", receiver_id: "" },
    messages: [],
    inboxCount: null,
  },
  setUserData: (partial) =>
    set((state) => ({
      userData: {
        ...state.userData,
        ...partial,
      },
    })),
}));
