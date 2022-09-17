import React, { FC } from 'react';
import { useAppContext } from '../../../../contexts/AppContext';
import { Person } from '../../../../typedefs';
import './AutocompleteSuggestion.css'

interface Props {
  person: Person;
}

export const AutocompleteSuggestion: FC<Props> = ({ person }) => {
  const { setSelectedPerson, setQuery } = useAppContext();

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
    >
      {person.name}
    </option>
  );
}
