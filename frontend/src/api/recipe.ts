import { getErrorMessage, makeRequest } from "./api";
import { assertErrorResponse } from "./assertions";
import { session_auth } from "./user";

export interface Recipe {
  name: string;
  reference: string;
  authors: string[];
  ingredients: string[];
  allergens: string[];
}

export async function addRecipe(
  collection_id: number,
  recipe_name: string,
  reference: string,
  authors: string[],
  ingredients: string[],
  allergens: string[],
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
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }
}

export async function removeRecipe(recipe_name: string) {
  const response = await makeRequest({
    type: "remove_recipe",
    auth: session_auth.auth,
    recipe_name,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }
}

export async function createAllergen(
  allergen_name: string,
  collection_id: number,
) {
  const response = await makeRequest({
    type: "create_allergen",
    allergen_name,
    collection_id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }
}

export async function createIngredient(
  ingredient_name: string,
  collection_id: number,
) {
  const response = await makeRequest({
    type: "create_ingredient",
    ingredient_name,
    collection_id,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    assertErrorResponse(data);
    throw new Error(getErrorMessage(data));
  }
}
