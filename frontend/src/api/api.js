import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export function getErrorMessage(responseData) {
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

export async function makeRequest(jsonBody) {
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

// TODO remove below

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
    {recipeName: "Ravioli", authors: ["Alice"], allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {recipeName: "Spaghetti", authors: ["Bob"], allergens: ["Gluten", "Shellfish"], reference: "Some Book", ingredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"] },
  ],
  allAllergens: ["Gluten", "Nuts", "Shellfish"],
  allIngredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"],
  allAuthors: ["Alice", "Bob"],
  columns: ["name", "author", "allergens", "reference", "ingredients"]
}
