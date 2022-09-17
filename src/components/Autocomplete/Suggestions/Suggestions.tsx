import React, { FC } from 'react';
import { AutocompleteSuggestion } from './Suggestion/AutocompleteSuggestion';
import { Person } from '../../../typedefs';
import './Suggestions.css';

interface Props {
  options: Person[];
}

export const Suggestions: FC<Props> = ({ options }) => {
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
