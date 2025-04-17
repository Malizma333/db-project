import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export function getErrorMessage(responseData: Record<string, string>) {
  const ERROR_MSGS = {
    parse_failed: "[ERROR] Parse failed",
    missing_keys: "[ERROR] Missing keys:",
    bad_values: "[ERROR] Bad values:",
    bad_auth_token: "[ERROR] Bad authentication token",
    bad_fetch: "[ERROR] Bad fetch:",
  };

  let message = "Unknown error";

  switch (responseData.type) {
    case "missing_keys": {
      message = ERROR_MSGS[responseData.type] + JSON.stringify(responseData.keys);
      break;
    }
    case "bad_values": {
      message = ERROR_MSGS[responseData.type] + JSON.stringify(responseData.values);
      break;
    }
    case "bad_fetch": {
      message = ERROR_MSGS[responseData.type] + responseData.message;
      break;
    }
    case "bad_auth_token": {
      message = ERROR_MSGS[responseData.type];
      break;
    }
    case "parse_failed": {
      message = ERROR_MSGS[responseData.type];
      break;
    }
    default:
      break;
  }

  return message;
}

export async function makeRequest(jsonBody: Record<string, unknown>): Promise<Response> {
  try {
    return await fetch('api', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    });
  } catch (e) {
    return new Response(JSON.stringify({
        type: "bad_fetch",
        message: (e as Error).message
      }), {
        status: 400,
    }); 
  }
}

// TODO remove below

// Export const DB_DATA = {
//   CollectionData: [
//     {recipeName: "Ravioli", authors: ["Alice"], allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
//     {recipeName: "Spaghetti", authors: ["Bob"], allergens: ["Gluten", "Shellfish"], reference: "Some Book", ingredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"] },
//   ],
// }
