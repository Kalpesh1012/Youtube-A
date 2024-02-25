/* eslint-disable no-undef */
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",

    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
  { identifier: "fil", name: "Filipino" },
  { identifier: "fr", name: "French" },
];

export const OPEN_APIKEY = import.meta.env.VITE_OPENAPI_KEY;
