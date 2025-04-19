import { getErrorMessage, makeRequest } from "./api";
import { skipToken, useQuery } from "@tanstack/react-query";
import { session_auth } from "./user";
import { Recipe } from "./recipe";
import { assertErrorResponse, assertFilterResponse } from "./assertions";

export interface FilterParams {
  collection_id: number;
  recipe_name: string;
  include_allergens: string[];
  exclude_allergens: string[];
  include_ingredients: string[];
  exclude_ingredients: string[];
  authors: string[];
  view_min: number;
  view_max: number;
  random: boolean;
}

export interface FilterResponse {
  type: string;
  table_size: number;
  recipes: Recipe[];
}

export async function filterRecipeCollection({
  collection_id,
  recipe_name,
  include_allergens,
  exclude_allergens,
  include_ingredients,
  exclude_ingredients,
  authors,
  view_min,
  view_max,
  random,
}: FilterParams): Promise<Recipe[]> {
  const response = await makeRequest({
    type: "filter_recipe_collection",
    collection_id,
    recipe_name,
    include_allergens,
    exclude_allergens,
    include_ingredients,
    exclude_ingredients,
    authors,
    view_min,
    view_max,
    random,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  assertFilterResponse(data);

  return data.recipes.map((recipe) => ({
    ...recipe,
    allergens: recipe.allergens.filter((allergen) => allergen !== null),
    ingredients: recipe.ingredients.filter((ingredient) => ingredient !== null),
  }));
}

export function useFilterCollection(props: FilterParams) {
  return useQuery({
    queryKey: ["filterCollection", props.collection_id],
    queryFn: () => filterRecipeCollection(props),
  });
}

async function countRecipesInFilter({
  collection_id,
  recipe_name,
  include_allergens,
  exclude_allergens,
  include_ingredients,
  exclude_ingredients,
  authors,
  view_min,
  view_max,
  random,
}: FilterParams): Promise<number> {
  const response = await makeRequest({
    type: "filter_recipe_collection",
    collection_id,
    recipe_name,
    include_allergens,
    exclude_allergens,
    include_ingredients,
    exclude_ingredients,
    authors,
    view_min,
    view_max,
    random,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  assertFilterResponse(data);

  return data.table_size;
}

export function useCountRecipesInFilter(props: FilterParams) {
  return useQuery({
    queryKey: ["filterCollectionCount", props.collection_id],
    queryFn: () => countRecipesInFilter(props),
  });
}

export async function renameRecipeCollection(id: number, new_name: string) {
  const response = await makeRequest({
    type: "rename_recipe_collection",
    auth: session_auth.auth,
    id,
    new_name,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }
}

export async function addRecipeCollection(name: string): Promise<number> {
  const response = await makeRequest({
    type: "add_recipe_collection",
    auth: session_auth.auth,
    name,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "id" in data &&
      typeof data.id === "number"
    )
  ) {
    throw new Error();
  }

  return data.id;
}

export async function removeRecipeCollection(id: number) {
  const response = await makeRequest({
    type: "remove_recipe_collection",
    auth: session_auth.auth,
    id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }
}

async function getOwnedRecipeCollections(): Promise<number[]> {
  const response = await makeRequest({
    type: "get_owned_recipe_collections",
    auth: session_auth.auth,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "ids" in data &&
      Array.isArray(data.ids) &&
      data.ids.every((id) => typeof id === "number")
    )
  ) {
    throw new Error();
  }

  return data.ids;
}

export function useOwnedCollections() {
  return useQuery({
    queryKey: ["ownedCollections"],
    queryFn:
      session_auth.auth !== "" ? () => getOwnedRecipeCollections() : skipToken,
  });
}

async function getAllergensFromCollection(id: number): Promise<string[]> {
  const response = await makeRequest({
    type: "get_allergens_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "allergens" in data &&
      Array.isArray(data.allergens) &&
      data.allergens.every((allergen) => typeof allergen === "string")
    )
  ) {
    throw new Error();
  }

  return data.allergens;
}

export function useCollectionAllergens(collection_id: number) {
  return useQuery({
    queryKey: ["collectionAllergens", collection_id],
    queryFn: () => getAllergensFromCollection(collection_id),
  });
}

async function getIngredientsFromCollection(id: number): Promise<string[]> {
  const response = await makeRequest({
    type: "get_ingredients_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "ingredients" in data &&
      Array.isArray(data.ingredients) &&
      data.ingredients.every((ingredient) => typeof ingredient === "string")
    )
  ) {
    throw new Error();
  }

  return data.ingredients;
}

export function useCollectionIngredients(collection_id: number) {
  return useQuery({
    queryKey: ["collectionIngredients", collection_id],
    queryFn: () => getIngredientsFromCollection(collection_id),
  });
}

async function getAuthorsFromCollection(id: number): Promise<string[]> {
  const response = await makeRequest({
    type: "get_authors_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "authors" in data &&
      Array.isArray(data.authors) &&
      data.authors.every((author) => typeof author === "string")
    )
  ) {
    throw new Error();
  }

  return data.authors;
}

export function useCollectionAuthors(collection_id: number) {
  return useQuery({
    queryKey: ["collectionAuthors", collection_id],
    queryFn: () => getAuthorsFromCollection(collection_id),
  });
}

export async function getRecipeCount(id: number): Promise<number> {
  const response = await makeRequest({
    type: "count_recipes_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "count" in data &&
      typeof data.count === "number"
    )
  ) {
    throw new Error();
  }

  return data.count;
}

export function useRecipeCount(collection_id: number) {
  return useQuery({
    queryKey: ["recipeCount", collection_id],
    queryFn:
      collection_id !== -1 ? () => getRecipeCount(collection_id) : skipToken,
  });
}

async function getRecipeCollectionName(id: number): Promise<string> {
  const response = await makeRequest({
    type: "get_collection_name",
    auth: session_auth.auth,
    id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "collection_name" in data &&
      typeof data.collection_name === "string"
    )
  ) {
    throw new Error();
  }

  return data.collection_name;
}

export function useCollectionName(collection_id: number) {
  return useQuery({
    queryKey: ["collectionName", collection_id],
    queryFn:
      collection_id !== -1
        ? () => getRecipeCollectionName(collection_id)
        : skipToken,
  });
}

async function getCollectionExists(id: number): Promise<boolean> {
  const response = await makeRequest({
    type: "get_collection_exists",
    auth: session_auth.auth,
    id,
  });

  return response.status === 200;
}

export function useCollectionExists(collection_id: number) {
  return useQuery({
    queryKey: ["collectionExists", collection_id],
    queryFn: () => getCollectionExists(collection_id),
    staleTime: Infinity,
  });
}
