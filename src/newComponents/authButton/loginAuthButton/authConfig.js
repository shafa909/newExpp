export const msalConfig = {
  auth: {
    clientId: "d892b9f6-0b8a-4683-868c-33d78a00ce19",
    authority: "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a", // This is a URL (e.g. https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a)
    redirectUri: "https://exceptionly.vercel.app",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
};