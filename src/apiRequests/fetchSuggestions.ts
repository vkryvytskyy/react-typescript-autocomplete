import { Person } from "../typedefs"

const API_URL = `https://swapi.dev/api/people/`;

interface ApiResponse {
  count: number;
  next: string;
  results: Person[]
}

interface FetchSuggestions {
  (query: string): Promise<ApiResponse>
}

export const fetchSuggestions: FetchSuggestions = async (query) => {
  const response = await fetch(`${API_URL}?search=${query}`);

  const people = await response.json() as ApiResponse;

  return people;
}
