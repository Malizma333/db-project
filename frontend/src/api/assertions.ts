import { CustomErrorResponse } from "./api";
import { Recipe } from "./recipe";
import { FilterResponse } from "./recipeCollection";
import { AuthResponse } from "./user";

export function assertRecipe(x: unknown): asserts x is Recipe {
  const ERROR_MSG = "[ERROR] Invalid recipe assertion!";

  if (typeof x !== "object" || x === null) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("name" in x && typeof x["name"] === "string")) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("reference" in x && typeof x["reference"] === "string")) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (
    !(
      "authors" in x &&
      Array.isArray(x["authors"]) &&
      x["authors"].every((y) => typeof y === "string")
    )
  ) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (
    !(
      "allergens" in x &&
      Array.isArray(x["allergens"]) &&
      x["allergens"].every((y) => typeof y === "string")
    )
  ) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (
    !(
      "ingredients" in x &&
      Array.isArray(x["ingredients"]) &&
      x["ingredients"].every((y) => typeof y === "string")
    )
  ) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }
}

export function assertFilterResponse(x: unknown): asserts x is FilterResponse {
  const ERROR_MSG = "[ERROR] Invalid filter assertion!";

  if (typeof x !== "object" || x === null) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("type" in x && typeof x["type"] === "string")) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("table_size" in x && typeof x["table_size"] === "number")) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("recipes" in x && Array.isArray(x["recipes"]))) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  x["recipes"].forEach((r) => assertRecipe(r));
}

export function assertErrorResponse(
  x: unknown,
): asserts x is CustomErrorResponse {
  const ERROR_MSG = "[ERROR] Invalid error assertion!";

  if (typeof x !== "object" || x === null) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("type" in x && typeof x["type"] === "string")) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if ("message" in x) {
    if (!(typeof "message" === "string")) {
      console.error(ERROR_MSG);
      throw new Error(ERROR_MSG);
    }
  }
}

export function assertAuthResponse(x: unknown): asserts x is AuthResponse {
  const ERROR_MSG = "[ERROR] Invalid auth assertion!";

  if (typeof x !== "object" || x === null) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("type" in x && typeof x["type"] === "string")) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }

  if (!("auth" in x && typeof x["auth"] === "string")) {
    console.error(ERROR_MSG);
    throw new Error(ERROR_MSG);
  }
}
