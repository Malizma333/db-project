import { makeRequest, getErrorMessage } from "./api";
import { useQuery } from "@tanstack/react-query";

export let session_auth = null;

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

async function loggedIn() {
  if (!session_auth) {
    return false;
  }

  const response = await makeRequest({
    type: "is logged in",
    auth: session_auth.auth,
  });

  return response.status === 200;
}

/**
 * Checks if logged in
 * @returns {import("@tanstack/react-query").UseQueryResult<boolean>} Logged in
 */
export function useLoggedIn() {
  return useQuery({
    queryKey: ['loggedIn'],
    queryFn: () => loggedIn(),
  })
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