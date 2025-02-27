import { create } from "zustand";

export const useEditModeStore = create((set) => ({
  enabled: false,
  disable: () => set({ enabled: false }),
  enable: () => set({ enabled: true }),
  toggle: () => set((state) => ({ enabled: !state.enabled }))
}));

export const useLoggedInStore = create((set) => ({
  loggedIn: false,
  logOut: () => set({ loggedIn: false }),
  logIn: () => set({ loggedIn: true })
}));
