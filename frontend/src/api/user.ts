import { getErrorMessage, makeRequest, ResponseDataType } from "./api";
import { useQuery } from "@tanstack/react-query";

interface AuthInfo {
  auth: string,
  lifetime: number,
  user: string,
};

export let session_auth: AuthInfo = { auth: "", lifetime: -1, user: "" };

export function initSessionAuth() {
  session_auth = {
    auth: sessionStorage.getItem("session.auth") || "",
    lifetime: parseInt(sessionStorage.getItem("session.lifetime") || "-1"),
    user: sessionStorage.getItem("session.user") || "",
  }
}

export async function login(username: string, password: string) {
  const response = await makeRequest({
    type: "login",
    username,
    password,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data as ResponseDataType));
  }

  session_auth = {
    auth: data.auth,
    lifetime: data.lifetime,
    user: username,
  }

  sessionStorage.setItem("session.auth", data.auth);
  sessionStorage.setItem("session.lifetime", data.lifetime);
  sessionStorage.setItem("session.user", username);
}

export async function logout() {
  const response = await makeRequest({
    type: "logout",
    auth: session_auth.auth,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data as ResponseDataType));
  }

  session_auth = {
    auth: "",
    lifetime: -1,
    user: "",
  };

  sessionStorage.removeItem("session.auth");
  sessionStorage.removeItem("session.lifetime");
  sessionStorage.removeItem("session.user");
}

async function loggedIn() {
  if (!session_auth) {
    return false;
  }

  const response = await makeRequest({
    type: "is_logged_in",
    auth: session_auth.auth,
  });

  return response.status === 200;
}

export function useLoggedIn() {
  return useQuery({
    queryKey: ['loggedIn'],
    queryFn: () => loggedIn(),
  })
}

export async function changeUsername(password: string, new_username: string) {
  const response = await makeRequest({
    type: "change_username",
    auth: session_auth.auth,
    password,
    new_username,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data as ResponseDataType));
  }

  session_auth.user = new_username;
  sessionStorage.setItem("session.user", new_username);
}

export async function changePassword(password: string, new_password: string) {
  const response = await makeRequest({
    type: "change_password",
    auth: session_auth.auth,
    password,
    new_password,
  });

  const data: unknown = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data as ResponseDataType));
  }
}