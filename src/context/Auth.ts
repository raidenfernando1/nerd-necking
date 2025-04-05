import { create } from "zustand";

interface AuthTypes {
  authState: any;
  setAuthState: (auth: any) => void;
}

export const useAuth = create<AuthTypes>((set) => ({
  authState: null,
  setAuthState: (auth) => set({ authState: auth }),
}));

export default useAuth;
