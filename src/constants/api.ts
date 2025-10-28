export const OMDB_API_KEY = 'b6241650';
export const OMDB_BASE_URL = 'https://www.omdbapi.com/';

export const API_ENDPOINTS = {
  searchByTitle: (title: string, page = 1) => `${OMDB_BASE_URL}?s=${title}&page=${page}&apikey=${OMDB_API_KEY}`,
};