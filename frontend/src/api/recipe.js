import { makeRequest, getErrorMessage } from "./api";

/**
 * Adds new recipe
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} reference
 * @param {string[]} authors
 * @param {string[]} ingredients
 * @param {string[]} allergens
 */
export async function addRecipe(collection_id, recipe_name, reference, authors, ingredients, allergens) {
  const response = await makeRequest({
    type: "add recipe",
    auth: session_auth.auth,
    collection_id,
    recipe_name,
    reference,
    authors,
    ingredients,
    allergens,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Removes recipe
 * @param {string} recipe_name
 */
export async function removeRecipe(recipe_name) {
  const response = await makeRequest({
    type: "remove recipe",
    auth: session_auth.auth,
    recipe_name,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Renames recipe
 * @param {string} recipe_name
 * @param {string} new_recipe_name
 */
export async function renameRecipe(recipe_name, new_recipe_name) {
  const response = await makeRequest({
    type: "rename recipe",
    auth: session_auth.auth,
    recipe_name,
    new_recipe_name,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Change reference
 * @param {string} recipe_name
 * @param {string} reference
 */
export async function changeReference(recipe_name, reference) {
  const response = await makeRequest({
    type: "change reference",
    auth: session_auth.auth,
    recipe_name,
    reference,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Add allergen
 * @param {string} recipe_name
 * @param {string} allergen
 */
export async function addAllergen(recipe_name, allergen) {
  const response = await makeRequest({
    type: "add allergen",
    auth: session_auth.auth,
    recipe_name,
    allergen,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Remove allergen
 * @param {string} recipe_name
 * @param {string} allergen
 */
export async function removeAllergen(recipe_name, allergen) {
  const response = await makeRequest({
    type: "remove allergen",
    auth: session_auth.auth,
    recipe_name,
    allergen,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Add ingredient
 * @param {string} recipe_name
 * @param {string} ingredient
 */
export async function addIngredient(recipe_name, ingredient) {
  const response = await makeRequest({
    type: "add ingredient",
    auth: session_auth.auth,
    recipe_name,
    ingredient,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Remove ingredient
 * @param {string} recipe_name
 * @param {string} ingredient
 */
export async function removeIngredient(recipe_name, ingredient) {
  const response = await makeRequest({
    type: "remove ingredient",
    auth: session_auth.auth,
    recipe_name,
    ingredient,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Add author
 * @param {string} recipe_name
 * @param {string} author
 */
export async function addAuthor(recipe_name, author) {
  const response = await makeRequest({
    type: "add author",
    auth: session_auth.auth,
    recipe_name,
    author,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Remove author
 * @param {string} recipe_name
 * @param {string} author
 */
export async function removeAuthor(recipe_name, author) {
  const response = await makeRequest({
    type: "remove author",
    auth: session_auth.auth,
    recipe_name,
    author,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}
