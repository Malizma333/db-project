import { getErrorMessage, makeRequest } from "./api";
import { session_auth } from "./user";

export interface Recipe {
  recipeName: string,
  reference: string,
  authors: string[],
  ingredients: string[],
  allergens: string[],
}

export async function addRecipe(
  collection_id: number,
  recipe_name: string,
  reference: string,
  authors: string[],
  ingredients: string[],
  allergens: string[]
) {
  const response = await makeRequest({
    type: "add_recipe",
    auth: session_auth.auth,
    collection_id,
    recipe_name,
    reference,
    authors,
    ingredients,
    allergens,
  }),

   data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

export async function removeRecipe(recipe_name: string) {
  const response = await makeRequest({
    type: "remove_recipe",
    auth: session_auth.auth,
    recipe_name,
  }),

   data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}
