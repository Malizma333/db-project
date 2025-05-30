import { create } from "zustand";
import { createComputed } from "zustand-computed";

import { Recipe } from "./api/recipe";
import { FilterParams } from "./api/recipeCollection";

export enum VIEW {
  SEARCH_SETTINGS = 0,
  MAIN = 1,
  COLLECTIONS_LIST = 2,
  CHANGE_USERNAME = 3,
  CHANGE_PASSWORD = 4,
  LOGIN_PROMPT = 5,
  NEW_RECIPE_FORM = 6,
  UPDATE_RECIPE_FORM = 7,
  RECIPE_SUMMARY = 8,
}

export enum COLUMN_MASK {
  NAME = 1,
  AUTHOR = 2,
  ALLERGENS = 4,
  REFERENCE = 8,
  INGREDIENTS = 16,
}

interface Store {
  clientUsername: string;
  view: VIEW;
  page: number;
  numRowsPerPage: number;
  visibleColumns: COLUMN_MASK;
  selectedRecipeName: string;
  selectedRecipeReference: string;
  selectedRecipeAllergens: string[];
  selectedRecipeIngredients: string[];
  selectedRecipeAuthors: string[];
  recipeSearchFilter: string;
  includeAllergensFilter: string[];
  excludeAllergensFilter: string[];
  includeIngredientsFilter: string[];
  excludeIngredientsFilter: string[];
  includeAuthorsFilter: string[];
  sessionAlert: boolean;
  loadedCollectionId: number;
  setMainView: () => void;
  setSettingsView: () => void;
  setLoginView: () => void;
  setChangeUserView: () => void;
  setChangePassView: () => void;
  setCollectionsView: () => void;
  setNewRecipeView: () => void;
  setUpdateRecipeView: () => void;
  setRecipeSummaryView: () => void;
  gotoFirstPage: () => void;
  gotoPrevPage: () => void;
  gotoNextPage: (numPages: number) => void;
  gotoLastPage: (numPages: number) => void;
  setRowsPerPage: (numRowsPerPage: number) => void;
  getColumnVisible: (mask: COLUMN_MASK) => boolean;
  toggleColumn: (mask: COLUMN_MASK) => void;
  setClientUsername: (clientUsername: string) => void;
  setSelectedRecipe: (recipeData: Recipe) => void;
  setRecipeSearchFilter: (recipeSearchFilter: string) => void;
  setIncludeAllergensFilter: (includeAllergensFilter: string[]) => void;
  setExcludeAllergensFilter: (excludeAllergensFilter: string[]) => void;
  setIncludeIngredientsFilter: (includeIngredientsFilter: string[]) => void;
  setExcludeIngredientsFilter: (excludeIngredientsFilter: string[]) => void;
  setIncludeAuthorsFilter: (includeAuthorsFilter: string[]) => void;
  setSessionAlert: (v?: boolean) => void;
  setLoadedCollectionId: (v: number) => void;
}

interface ComputedStore {
  filterProps: FilterParams;
  selectedRecipe: Recipe;
}

const initStoreState = {
  clientUsername: "",
  view: VIEW.MAIN,
  page: 0,
  numRowsPerPage: 10,
  visibleColumns: COLUMN_MASK.NAME | COLUMN_MASK.AUTHOR | COLUMN_MASK.REFERENCE,
  recipeSearchFilter: "",
  includeAllergensFilter: [],
  excludeAllergensFilter: [],
  includeIngredientsFilter: [],
  excludeIngredientsFilter: [],
  includeAuthorsFilter: [],
  selectedRecipeName: "",
  selectedRecipeReference: "",
  selectedRecipeAuthors: [],
  selectedRecipeIngredients: [],
  selectedRecipeAllergens: [],
  sessionAlert: false,
  loadedCollectionId: -1,
};

const computed = createComputed(
  (state: Store): ComputedStore => ({
    filterProps: {
      collection_id: -1,
      recipe_name: state.recipeSearchFilter,
      include_allergens: state.includeAllergensFilter,
      exclude_allergens: state.excludeAllergensFilter,
      include_ingredients: state.includeIngredientsFilter,
      exclude_ingredients: state.excludeIngredientsFilter,
      authors: state.includeAuthorsFilter,
      view_min: -1,
      view_max: -1,
      random: false,
    },
    selectedRecipe: {
      name: state.selectedRecipeName,
      reference: state.selectedRecipeReference,
      authors: state.selectedRecipeAuthors,
      allergens: state.selectedRecipeAllergens,
      ingredients: state.selectedRecipeIngredients,
    },
  }),
);

export const useAppStore = create<Store>()(
  computed((set, get) => ({
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
    gotoFirstPage: () => set({ page: 0 }),
    gotoPrevPage: () => set((state) => ({ page: Math.max(0, state.page - 1) })),
    gotoNextPage: (numPages: number) =>
      set((state) => ({ page: Math.min(numPages - 1, state.page + 1) })),
    gotoLastPage: (numPages: number) => set(() => ({ page: numPages - 1 })),
    setRowsPerPage: (numRowsPerPage: number) => set({ numRowsPerPage }),
    getColumnVisible: (mask: COLUMN_MASK) => (get().visibleColumns & mask) > 0,
    toggleColumn: (mask: COLUMN_MASK) =>
      set((state) => ({ visibleColumns: state.visibleColumns ^ mask })),
    setClientUsername: (clientUsername: string) => set({ clientUsername }),
    setSelectedRecipe: (recipeData: Recipe) =>
      set({
        selectedRecipeName: recipeData.name,
        selectedRecipeReference: recipeData.reference,
        selectedRecipeAllergens: recipeData.allergens,
        selectedRecipeIngredients: recipeData.ingredients,
        selectedRecipeAuthors: recipeData.authors,
      }),
    setRecipeSearchFilter: (recipeSearchFilter: string) =>
      set({ recipeSearchFilter }),
    setIncludeAllergensFilter: (includeAllergensFilter: string[]) =>
      set({ includeAllergensFilter }),
    setExcludeAllergensFilter: (excludeAllergensFilter: string[]) =>
      set({ excludeAllergensFilter }),
    setIncludeIngredientsFilter: (includeIngredientsFilter: string[]) =>
      set({ includeIngredientsFilter }),
    setExcludeIngredientsFilter: (excludeIngredientsFilter: string[]) =>
      set({ excludeIngredientsFilter }),
    setIncludeAuthorsFilter: (includeAuthorsFilter: string[]) =>
      set({ includeAuthorsFilter }),
    setSessionAlert: (sessionAlert = true) => set({ sessionAlert }),
    setLoadedCollectionId: (loadedCollectionId) => set({ loadedCollectionId }),
  })),
);
