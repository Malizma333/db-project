import { create } from "zustand";
import { createComputed } from "zustand-computed";
import { DB_DATA } from "./api/temp";

export const VIEW = Object.freeze({
  SEARCH_SETTINGS: 0,
  MAIN: 1,
  COLLECTIONS_LIST: 2,
  CHANGE_USERNAME: 3,
  CHANGE_PASSWORD: 4,
  LOGIN_PROMPT: 5,
});

const initStoreState = {
  view: VIEW.MAIN,
  editMode: false,
  loggedIn: false,
  page: 0,
  numRowsPerPage: 10,
  numRecipesInCollection: DB_DATA.collectionData.length
}

const computed = createComputed((state) => ({
  numPages: Math.ceil(state.numRecipesInCollection / state.numRowsPerPage)
}))

export const useAppStore = create(
  computed(
    (set, get) => ({
      ...initStoreState,
      setMainView: () => set({ view: VIEW.MAIN }),
      setSettingsView: () => set({ view: VIEW.SEARCH_SETTINGS }),
      setLoginView: () => set({ view: VIEW.LOGIN_PROMPT }),
      disableEditMode: () => set({ editMode: false }),
      enableEditMode: () => set({ editMode: true }),
      toggleEditMode: () => set((state) => ({ editMode: !state.editMode })),
      logIn: () => set({ loggedIn: true }),
      logOut: () => set({ loggedIn: false }),
      gotoFirstPage: () => set({ page: 0 }),
      gotoPrevPage: () => set((state) => ({ page: Math.max(0, state.page - 1) })),
      gotoNextPage: () => set((state) => ({ page: Math.min(get().numPages - 1, state.page + 1) })),
      gotoLastPage: () => set(() => ({ page: get().numPages - 1 })),
      setRowsPerPage: (val) => set({ numRowsPerPage: val }),
    })
  )
);
