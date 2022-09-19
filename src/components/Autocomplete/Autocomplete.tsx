import React, { useState, useEffect, useCallback } from 'react';
import { Suggestions } from './Suggestions/Suggestions';
import { Person } from '../../typedefs';
import './Autocomplete.css';
import { fetchSuggestions } from '../../apiRequests/fetchSuggestions';
import { useAppContext } from '../../contexts/AppContext';
import { debounce } from '../../apiRequests/debounce';

export const Autocomplete = () => {
  const { query, setQuery } = useAppContext();
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedFetchSuggestions = useCallback(debounce((query: string) => fetchSuggestions(query, setPeople, setIsLoading), 250), []);

  useEffect(() => {
    if (query?.length && query?.length > 0) {
      debouncedFetchSuggestions(query, setPeople);
    } else {
      setPeople([]);
    }

    return () => {
      debouncedFetchSuggestions.clear();
    };
  }, [query, debouncedFetchSuggestions]);  

  return (
    <div className='autocompleteContainer'>
      <input
        type='text'
        placeholder='type in name...'
        onChange={(e) => {
          setIsLoading(true)
          if (setQuery) {
            setQuery(e.target.value)
          }
        }}
        className='input'
      />
      {(query?.length !== undefined && query?.length > 0) && (
        <Suggestions options={people} isLoading={isLoading} />
      )}
    </div>
  );
}
