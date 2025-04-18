import { QueryClient } from "@tanstack/react-query";

export interface CustomErrorResponse {
  type: string;
  message?: string;
}

export const AUTH_ERROR = "AUTH_ERROR";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export function getErrorMessage(responseData: CustomErrorResponse) {
  const ERROR_MSGS = {
    parse_error: "[ERROR] Parse failed!",
    bad_fetch_error: "Fetch failed! Server seems to be down...",
    resource_error: "[ERROR] Invalid resource: ",
    username_error: "Invalid username or password!",
    password_error: "Invalid username or password!",
    internal_server_error: "[ERROR] Robert or Bre screwed up: ",
  };

  let message = "Unknown error";

  switch (responseData.type) {
    case "bad_fetch_error": {
      message = ERROR_MSGS[responseData.type] + responseData.message;
      break;
    }
    case "auth_token_error": {
      message = AUTH_ERROR;
      break;
    }
    case "parse_error": {
      message = ERROR_MSGS[responseData.type];
      break;
    }
    case "resource_error": {
      message = ERROR_MSGS[responseData.type] + responseData.message;
      break;
    }
    case "username_error": {
      message = ERROR_MSGS[responseData.type];
      break;
    }
    case "password_error": {
      message = ERROR_MSGS[responseData.type];
      break;
    }
    case "internal_server_error": {
      message = ERROR_MSGS[responseData.type] + responseData.message;
      break;
    }
    default:
      break;
  }

  return message;
}

export async function makeRequest(
  jsonBody: Record<string, unknown>,
): Promise<Response> {
  try {
    const data = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonBody),
    });
    return data;
  } catch (e) {
    return new Response(
      JSON.stringify({
        type: "bad_fetch_error",
        message: (e as Error).message,
      }),
      {
        status: 400,
      },
    );
  }
}
