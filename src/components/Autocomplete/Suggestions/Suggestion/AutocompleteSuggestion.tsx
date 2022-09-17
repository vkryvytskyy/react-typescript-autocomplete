import React, { FC } from 'react';
import { useAppContext } from '../../../../contexts/AppContext';
import { Person } from '../../../../typedefs';
import { getMatchingPart } from './getMatchingPart';
import './AutocompleteSuggestion.css'

interface Props {
  person: Person;
}

export const AutocompleteSuggestion: FC<Props> = ({ person }) => {
  const { setSelectedPerson, setQuery, query } = useAppContext();

  return (
    <option
      className='option'
      onClick={() => {
        if (setSelectedPerson) {
          setSelectedPerson(person);
        }

        if (setQuery) {
          setQuery('');
        }
      }}
      dangerouslySetInnerHTML={{
        __html: getMatchingPart(query ?? '', person.name),
      }}
      value={person.name}
    />
  );
}
