import { create } from "zustand";

export const useSettingsViewStore = create((set) => ({
  visible: false,
  hide: () => set({ visible: false }),
  show: () => set({ visible: true }),
}));

export const useLoginViewStore = create((set) => ({
  visible: false,
  hide: () => set({ visible: false }),
  show: () => set({ visible: true })
}));
