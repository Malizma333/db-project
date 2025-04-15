import { makeRequest, getErrorMessage } from "./api";
import { useQuery } from "@tanstack/react-query";
import { session_auth } from "./user";

async function filterRecipeCollection({
  collection_id,
  recipe_name,
  include_allergens,
  exclude_allergens,
  include_ingredients,
  exclude_ingredients,
  authors,
  view_min,
  view_max
}) {
  const response = await makeRequest({
    type: "filter recipe collection",
    collection_id,
    recipe_name,
    include_allergens,
    exclude_allergens,
    include_ingredients,
    exclude_ingredients,
    authors,
    view_min,
    view_max
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.recipes;
}

/**
 * Filters the recipe collection
 * @param {{
 *   collection_id: number,
 *   recipe_name: string,
 *   include_allergens: string[],
 *   exclude_allergens: string[],
 *   include_ingredients: string[],
 *   exclude_ingredients: string[],
 *   authors: string[],
 *   view_min: number,
 *   view_max: number
 * }} props
 * @returns {Record<string, any>[]} Recipe list
 */
export function useFilterCollection(props) {
  return useQuery({
    queryKey: ['filterCollection', props.collection_id],
    queryFn: () => filterRecipeCollection(props),
  })
}

/**
 * Renames recipe collection
 * @param {number} id
 * @param {string} new_name
 */
export async function renameRecipeCollection(id, new_name) {
  const response = await makeRequest({
    type: "rename recipe collection",
    auth: session_auth.auth,
    id,
    new_name,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Adds recipe collection
 * @param {string} name
 * @returns {number} Added collection id
 */
export async function addRecipeCollection(name) {
  const response = await makeRequest({
    type: "add recipe collection",
    auth: session_auth.auth,
    name,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.id;
}

/**
 * Removes recipe collection
 * @param {number} id
 */
export async function removeRecipeCollection(id) {
  const response = await makeRequest({
    type: "remove recipe collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

async function getOwnedRecipeCollections() {
  const response = await makeRequest({
    type: "get owned recipe collections",
    auth: session_auth.auth,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.ids;
}

/**
 * Get list of owned recipe collections
 * @returns {number[]} List of recipe collection ids
 */
export function useOwnedCollections() {
  return useQuery({
    queryKey: ['ownedCollections'],
    queryFn: () => getOwnedRecipeCollections(),
  })
}

async function getAllergensFromCollection(id) {
  const response = await makeRequest({
    type: "get allergens in collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.allergens;
}

/**
 * Get list of allergens in collection
 * @param {number} collection_id Target collection
 * @returns {string[]} List of allergens
 */
export function useCollectionAllergens(collection_id) {
  return useQuery({
    queryKey: ['collectionAllergens'],
    queryFn: () => getAllergensFromCollection(collection_id),
  })
}

async function getIngredientsFromCollection(id) {
  const response = await makeRequest({
    type: "get ingredients in collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.ingredients;
}

/**
 * Get list of ingredients in collection
 * @param {number} collection_id Target collection
 * @returns {string[]} List of ingredients
 */
export function useCollectionIngredients(collection_id) {
  return useQuery({
    queryKey: ['collectionIngredients'],
    queryFn: () => getIngredientsFromCollection(collection_id),
  })
}

async function getRecipeCount(id) {
  const response = await makeRequest({
    type: "count recipes in collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.count;
}

/**
 * Count recipes in collection
 * @param {number} collection_id Target collection
 * @returns {number} Count of recipes
 */
export function useRecipeCount(collection_id) {
  return useQuery({
    queryKey: ['recipeCount'],
    queryFn: () => getRecipeCount(collection_id),
  })
}
