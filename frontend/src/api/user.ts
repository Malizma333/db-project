import { getErrorMessage, makeRequest } from "./api";
import { useQuery } from "@tanstack/react-query";

interface AuthInfo {
  auth: string,
  lifetime: number
};

export let session_auth: AuthInfo = {
  auth: "",
  lifetime: -1
};

export async function login(username: string, password: string) {
  const response = await makeRequest({
    type: "login",
    username,
    password,
  }),

   data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  session_auth = {
    auth: data.auth,
    lifetime: data.lifetime,
  }
}

export async function logout() {
  const response = await makeRequest({
    type: "logout",
    auth: session_auth.auth,
  }),

   data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }

  session_auth = {
    auth: "",
    lifetime: -1
  };
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
  }),

   data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}

export async function changePassword(password: string, new_password: string) {
  const response = await makeRequest({
    type: "change_password",
    auth: session_auth.auth,
    password,
    new_password,
  }),

   data = await response.json();

  if (response.status !== 200) {
    throw new Error(getErrorMessage(data));
  }
}