import React, { useState, useEffect } from 'react';
import { Suggestions } from './Suggestions/Suggestions';
import { Person } from '../../typedefs';
import './Autocomplete.css';
import { fetchSuggestions } from '../../apiRequests/fetchSuggestions';
import { useAppContext } from '../../contexts/AppContext';

export const Autocomplete = () => {
  const { query, setQuery } = useAppContext();
  const [people, setPeople] = useState<Person[]>([]);
  const [resultsCount, setResultsCount] = useState(0);

  const getQuerySuggestions = async(query: string) => {
    const suggestions = await fetchSuggestions(query);

    setResultsCount(suggestions.count);
    setPeople(suggestions.results);
  }

  useEffect(() => {
    if (query?.length && query?.length > 0) {
      getQuerySuggestions(query);
    } else {
      setResultsCount(0);
    }
  }, [query]);  

  return (
    <div className='autocompleteContainer'>
      <input
        type='text'
        onChange={(e) => {
          if (setQuery) {
            setQuery(e.target.value)
          }
        }}
        className='input'
      />
      {/* TOTAL RESULTS FOUND BY QUERY, MAX 10 WILL BE SHOWN CAUSE OF PAGINATION */}
      {resultsCount > 0 && (
        <h3 className='suggestionsTitle'>{`${resultsCount} results found`}</h3>
      )}
      {(query?.length !== undefined && query?.length > 0) && (
        <Suggestions options={people} />
      )}
    </div>
  )
}
