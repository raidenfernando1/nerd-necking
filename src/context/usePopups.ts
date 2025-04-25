import { create } from "zustand";

interface PopupStates {
  FWState: boolean;
}

interface PopupStore {
  setState: <K extends keyof PopupStates>(params: {
    stateName: K;
    stateChange: PopupStates[K];
  }) => void;
}

export const usePopups = create<PopupStore>((set) => ({
  FWState: false,
  setState: ({ stateName, stateChange }) => set({ [stateName]: stateChange }),
}));
