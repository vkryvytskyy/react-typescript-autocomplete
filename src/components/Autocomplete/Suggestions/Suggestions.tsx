import React, { FC } from 'react';
import { AutocompleteSuggestion } from './Suggestion/AutocompleteSuggestion';
import { Person } from '../../../typedefs';
import './Suggestions.css';

interface Props {
  options: Person[];
  isLoading: boolean;
}

export const Suggestions: FC<Props> = ({ options, isLoading }) => {
  console.log(isLoading);
  
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className='wrapper'>
      {options.length > 0
        ? (
          options.map((option) => (
            <AutocompleteSuggestion key={option.url} person={option} />
          ))
        )
        : (
          <p>No matches found</p>
        )
      }
    </div>
  );
}
