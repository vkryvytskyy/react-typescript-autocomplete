import { SetStateAction, Dispatch } from "react";
import { Person } from "../typedefs"

const API_URL = `https://swapi.dev/api/people/`;

interface ApiResponse {
  count: number;
  next: string;
  results: Person[]
}

interface FetchSuggestions {
  (
    query: string,
    setPeople: Dispatch<SetStateAction<Person[]>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
  ): void
}

export const fetchSuggestions: FetchSuggestions = async (query, setPeople, setIsLoading) => {
  setIsLoading(true);

  const request = async () => {
    let people: ApiResponse = {
      count: 0,
      next: '',
      results: [],
    }
  
    try {
      const response = await fetch(`${API_URL}?search=${query}`);
  
      people = await response.json() as ApiResponse;
    
      setPeople(people.results);
    } catch (e) {
      console.log(e);
    }
  }

  await request();
  setIsLoading(false);
}
