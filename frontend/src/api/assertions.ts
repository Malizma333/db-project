import { CustomErrorResponse } from "./api";
import { Recipe } from "./recipe";
import { FilterResponse } from "./recipeCollection";
import { AuthResponse } from "./user";

export function assertRecipe(x: unknown): asserts x is Recipe {
  if (typeof x !== "object" || x === null) {
    throw new Error();
  }

  if (!("name" in x && typeof x["name"] === "string")) {
    throw new Error();
  }

  if (!("reference" in x && typeof x["reference"] === "string")) {
    throw new Error();
  }

  if (
    !(
      "authors" in x &&
      Array.isArray(x["authors"]) &&
      x["authors"].every((y) => typeof y === "string")
    )
  ) {
    throw new Error();
  }

  if (
    !(
      "allergens" in x &&
      Array.isArray(x["allergens"]) &&
      x["allergens"].every((y) => typeof y === "string")
    )
  ) {
    throw new Error();
  }

  if (
    !(
      "ingredients" in x &&
      Array.isArray(x["ingredients"]) &&
      x["ingredients"].every((y) => typeof y === "string")
    )
  ) {
    throw new Error();
  }
}

export function assertFilterResponse(x: unknown): asserts x is FilterResponse {
  if (typeof x !== "object" || x === null) {
    throw new Error();
  }

  if (!("type" in x && typeof x["type"] === "string")) {
    throw new Error();
  }

  if (!("table_size" in x && typeof x["table_size"] === "number")) {
    throw new Error();
  }

  if (!("recipes" in x && Array.isArray(x["recipes"]))) {
    throw new Error();
  }

  x["recipes"].forEach((r) => assertRecipe(r));
}

export function assertErrorResponse(
  x: unknown,
): asserts x is CustomErrorResponse {
  if (typeof x !== "object" || x === null) {
    throw new Error();
  }

  if (!("type" in x && typeof x["type"] === "string")) {
    throw new Error();
  }

  if ("message" in x) {
    if (!(typeof "message" === "string")) {
      throw new Error();
    }
  }
}

export function assertAuthResponse(x: unknown): asserts x is AuthResponse {
  if (typeof x !== "object" || x === null) {
    throw new Error();
  }

  if (!("type" in x && typeof x["type"] === "string")) {
    throw new Error();
  }

  if (!("auth" in x && typeof x["auth"] === "string")) {
    throw new Error();
  }

  if (!("expiration" in x && typeof x["expiration"] === "string")) {
    throw new Error();
  }
}
