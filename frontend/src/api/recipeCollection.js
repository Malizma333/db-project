import { makeRequest, getErrorMessage } from "./api";
import { useQuery } from "@tanstack/react-query";
import { session_auth } from "./user";

export async function filterRecipeCollection({
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
    type: "filter_recipe_collection",
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
    type: "rename_recipe_collection",
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
 * @returns {Promise<number>} Added collection id
 */
export async function addRecipeCollection(name) {
  const response = await makeRequest({
    type: "add_recipe_collection",
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
 * @param {Promise<number>} id
 */
export async function removeRecipeCollection(id) {
  const response = await makeRequest({
    type: "remove_recipe_collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Get list of owned recipe collections
 * @returns {Promise<number[]>} List of recipe collection ids
 */
async function getOwnedRecipeCollections() {
  const response = await makeRequest({
    type: "get_owned_recipe_collections",
    auth: session_auth.auth,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.ids;
}

export function useOwnedCollections() {
  return useQuery({
    queryKey: ['ownedCollections'],
    queryFn: () => getOwnedRecipeCollections(),
  })
}

/**
 * Get list of allergens in collection
 * @param {number} collection_id Target collection
 * @returns {Promise<string[]>} List of allergens
 */
async function getAllergensFromCollection(id) {
  const response = await makeRequest({
    type: "get_allergens_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.allergens;
}

export function useCollectionAllergens(collection_id) {
  return useQuery({
    queryKey: ['collectionAllergens'],
    queryFn: () => getAllergensFromCollection(collection_id),
  })
}

/**
 * Get list of ingredients in collection
 * @param {number} collection_id Target collection
 * @returns {Promise<string[]>} List of ingredients
 */
async function getIngredientsFromCollection(id) {
  const response = await makeRequest({
    type: "get_ingredients_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.ingredients;
}

export function useCollectionIngredients(collection_id) {
  return useQuery({
    queryKey: ['collectionIngredients'],
    queryFn: () => getIngredientsFromCollection(collection_id),
  })
}

/**
 * Get list of authors in collection
 * @param {number} collection_id Target collection
 * @returns {Promise<string[]>} List of authors
 */
async function getAuthorsFromCollection(id) {
  const response = await makeRequest({
    type: "get_authors_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.authors;
}

export function useCollectionAuthors(collection_id) {
  return useQuery({
    queryKey: ['collectionAuthors'],
    queryFn: () => getAuthorsFromCollection(collection_id),
  })
}

/**
 * Count recipes in collection
 * @param {number} collection_id Target collection
 * @returns {Promise<number>} Count of recipes
 */
async function getRecipeCount(id) {
  const response = await makeRequest({
    type: "count_recipes_in_collection",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.count;
}

export function useRecipeCount(collection_id) {
  return useQuery({
    queryKey: ['recipeCount'],
    queryFn: () => getRecipeCount(collection_id),
  })
}

/**
 * Get name of collection
 * @param {number} collection_id Target collection
 * @returns {Promise<string>} Name of collection
 */
async function getRecipeCollectionName(id) {
  const response = await makeRequest({
    type: "get_collection_name",
    auth: session_auth.auth,
    id,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  return data.name;
}

export function useCollectionName(collection_id) {
  return useQuery({
    queryKey: ['collectionName'],
    queryFn: () => getRecipeCollectionName(collection_id),
  })
}
