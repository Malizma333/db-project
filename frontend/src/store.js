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
  NEW_RECIPE_FORM: 6,
  UPDATE_RECIPE_FORM: 7,
  RECIPE_SUMMARY: 8,
});

export const COLUMN_MASK = Object.freeze({
  NAME: 1,
  AUTHOR: 2,
  ALLERGENS: 4,
  REFERENCE: 8,
  INGREDIENTS: 16
});

const initStoreState = {
  view: VIEW.MAIN,
  loggedIn: false,
  page: 0,
  numRowsPerPage: 10,
  numRecipesInCollection: DB_DATA.collectionData.length,
  visibleColumns: COLUMN_MASK.NAME | COLUMN_MASK.AUTHOR | COLUMN_MASK.REFERENCE,
  activeRecipeId: 0,
}

const computed = createComputed((state) => ({
  numPages: Math.ceil(state.numRecipesInCollection / state.numRowsPerPage),
  editMode: state.loggedIn && true // TODO: Determine if current collection belongs to current user
}));

export const useAppStore = create(
  computed(
    (set, get) => ({
      ...initStoreState,
      setMainView: () => set({ view: VIEW.MAIN }),
      setSettingsView: () => set({ view: VIEW.SEARCH_SETTINGS }),
      setLoginView: () => set({ view: VIEW.LOGIN_PROMPT }),
      setChangeUserView: () => set({ view: VIEW.CHANGE_USERNAME }),
      setChangePassView: () => set({ view: VIEW.CHANGE_PASSWORD }),
      setCollectionsView: () => set({ view: VIEW.COLLECTIONS_LIST }),
      setNewRecipeView: () => set({ view: VIEW.NEW_RECIPE_FORM }),
      setUpdateRecipeView: () => set({ view: VIEW.UPDATE_RECIPE_FORM }),
      setRecipeSummaryView: () => set({ view: VIEW.RECIPE_SUMMARY }),
      logIn: () => set({ loggedIn: true }),
      logOut: () => set({ loggedIn: false }),
      gotoFirstPage: () => set({ page: 0 }),
      gotoPrevPage: () => set((state) => ({ page: Math.max(0, state.page - 1) })),
      gotoNextPage: () => set((state) => ({ page: Math.min(get().numPages - 1, state.page + 1) })),
      gotoLastPage: () => set(() => ({ page: get().numPages - 1 })),
      setRowsPerPage: (val) => set({ numRowsPerPage: val }),
      getColumnVisible: (mask) => ((get().visibleColumns & mask) > 0),
      toggleColumn: (mask) => set((state) => ({ visibleColumns: state.visibleColumns ^ mask })),
      setActiveRecipeId: (val) => set({ activeRecipeId: val }),
    })
  )
);
