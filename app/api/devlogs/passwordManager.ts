/**
 * Retrieves a password from search parameters or localStorage.
 *
 * @param searchParams - A URLSearchParams object potentially containing the "pwd" parameter.
 * @returns The password string if found in the URL or localStorage; otherwise, null.
 */
export function getPassword(searchParams: URLSearchParams): string | null {
  // When running on the client, localStorage is available.
  if (typeof window !== "undefined") {
    // Check if the password exists in the URL parameters.
    const pwdParam = searchParams.get("pwd");
    if (pwdParam) {
      // Store the password in localStorage for future use.
      localStorage.setItem("pwd", pwdParam);
      return pwdParam;
    }

    // If not present in the URL, check localStorage.
    const storedPwd = localStorage.getItem("pwd");
    if (storedPwd) {
      return storedPwd;
    }
  } else {
    // In a server-side scenario (if somehow this function is executed there),
    // localStorage is not available. Use the URL parameter if present.
    const pwdParam = searchParams.get("pwd");
    if (pwdParam) {
      return pwdParam;
    }
  }

  // Return null if no password is found.
  return null;
}

export function getPayloadWithPassword(
  searchParams: URLSearchParams,
  payload: Object
) {
  return { ...payload, password: getPassword(searchParams) };
}
