let session_auth = null;

function getErrorMessage(responseData) {
  const ERROR_MSGS = {
    parse_failed: "[ERROR] Parse failed",
    missing_keys: "[ERROR] Missing keys:",
    bad_values: "[ERROR] Bad values:",
    bad_auth_token: "[ERROR] Bad authentication token",
    bad_fetch: "[ERROR] Bad fetch:",
  };

  let message = ERROR_MSGS[responseData.type]

  switch (responseData.type) {
    case "missing_keys":
      message += JSON.stringify(responseData.keys);
      break;
    case "bad_values":
      message += JSON.stringify(responseData.values);
      break;
    case "bad_fetch":
      message += responseData.message;
    default:
      break;
  }

  return message;
}

async function makeRequest(jsonBody) {
  try {
    return await fetch('api', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    });
  } catch (e) {
    return new Response({
      status: 400,
      body: {
        type: "bad_fetch",
        message: e.message
      }
    });
  }
}

/**
 * Log in with username and password to create auth
 * @param {string} username
 * @param {string} password
 */
export async function login(username, password) {
  const response = await makeRequest({
    type: "login",
    username,
    password,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  session_auth = {
    auth: data.auth,
    lifetime: data.lifetime,
  }

  console.log(session_auth);
}

/**
 * Logs out and forgets auth
 */
export async function logout() {
  const response = await makeRequest({
    type: "logout",
    auth: session_auth.auth,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  session_auth = null;

  console.log(session_auth);
}

/**
 * Checks if logged in
 * @returns {boolean} Logged in
 */
export async function loggedIn() {
  const response = await makeRequest({
    type: "is logged in",
    auth: session_auth.auth,
  });

  return response.status === 200;
}

/**
 * Changes username
 * @param {string} password
 * @param {string} new_username
 */
export async function changeUsername(password, new_username) {
  const response = await makeRequest({
    type: "change username",
    auth: session_auth.auth,
    password,
    new_username,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Changes password
 * @param {string} password
 * @param {string} new_password
 */
export async function changePassword(password, new_password) {
  const response = await makeRequest({
    type: "change password",
    auth: session_auth.auth,
    password,
    new_password,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

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
 * @param {number} collection_id
 * @param {string} recipe_name
 */
export async function removeRecipe(collection_id, recipe_name) {
  const response = await makeRequest({
    type: "remove recipe",
    auth: session_auth.auth,
    collection_id,
    recipe_name,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Renames recipe
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} new_recipe_name
 */
export async function renameRecipe(collection_id, recipe_name, new_recipe_name) {
  const response = await makeRequest({
    type: "rename recipe",
    auth: session_auth.auth,
    collection_id,
    recipe_name,
    new_recipe_name,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

/**
 * Filters the recipe collection
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string[]} include_allergens
 * @param {string[]} exclude_allergens
 * @param {string[]} include_ingredients
 * @param {string[]} exclude_ingredients
 * @param {string[]} authors
 * @param {number} view_min Slice of view min
 * @param {number} view_max Slice of view max
 * @returns {Record<string, any>[]} Recipe list
 */
export async function filterRecipeCollection(
  collection_id,
  recipe_name,
  include_allergens,
  exclude_allergens,
  include_ingredients,
  exclude_ingredients,
  authors,
  view_min,
  view_max
) {
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

/**
 * Get list of owned recipe collections
 * @returns {number[]} List of recipe collection ids
 */
export async function getOwnedRecipeCollections() {
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
 * Get list of allergens in collection
 * @param {number} id
 * @returns {string[]} List of allergens
 */
export async function getAllergensFromCollection(id) {
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
 * Get list of ingredients in collection
 * @param {number} id
 * @returns {string[]} List of ingredients
 */
export async function getIngredientsFromCollection(id) {
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
 * Count recipes in collection
 * @param {number} id
 * @returns {number} Count of recipes
 */
export async function getRecipeCount(id) {
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
 * Change reference
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} reference
 */
export async function changeReference(collection_id, recipe_name, reference) {
  const response = await makeRequest({
    type: "change reference",
    auth: session_auth.auth,
    collection_id,
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
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} allergen
 */
export async function addAllergen(collection_id, recipe_name, allergen) {
  const response = await makeRequest({
    type: "add allergen",
    auth: session_auth.auth,
    collection_id,
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
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} allergen
 */
export async function removeAllergen(collection_id, recipe_name, allergen) {
  const response = await makeRequest({
    type: "remove allergen",
    auth: session_auth.auth,
    collection_id,
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
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} ingredient
 */
export async function addIngredient(collection_id, recipe_name, ingredient) {
  const response = await makeRequest({
    type: "add ingredient",
    auth: session_auth.auth,
    collection_id,
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
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} ingredient
 */
export async function removeIngredient(collection_id, recipe_name, ingredient) {
  const response = await makeRequest({
    type: "remove ingredient",
    auth: session_auth.auth,
    collection_id,
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
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} author
 */
export async function addAuthor(collection_id, recipe_name, author) {
  const response = await makeRequest({
    type: "add author",
    auth: session_auth.auth,
    collection_id,
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
 * @param {number} collection_id
 * @param {string} recipe_name
 * @param {string} author
 */
export async function removeAuthor(collection_id, recipe_name, author) {
  const response = await makeRequest({
    type: "remove author",
    auth: session_auth.auth,
    collection_id,
    recipe_name,
    author,
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

export const DB_DATA = {
  collectionArray: [
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"}
  ],
  collectionData: [
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten", "Shellfish"], reference: "Some Book", ingredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"] },
  ],
  allAllergens: ["Gluten", "Nuts", "Shellfish"],
  allIngredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"],
  allAuthors: ["Alice", "Bob"],
  columns: ["name", "author", "allergens", "reference", "ingredients"]
}

export const USER_DATA = {
  username: "test",
  password: "test"
}

export function correctCredentials (user, pass) {
  return user === USER_DATA.username && pass === USER_DATA.password;
}

export function correctPassword (pass) {
  return pass === USER_DATA.password;
}

export function validPassword (pass) {
  return 8 <= pass.length && pass.length <= 20;
}

export function validUsername (name) {
  return 8 <= name.length && name.length <= 20;
}

export function uniqueUsername (name) {
  return name !== USER_DATA.username;
}

export function tempChangePwd (pass) {
  USER_DATA.password = pass;
}

export function tempChangeUser (name) {
  USER_DATA.username = name;
}
