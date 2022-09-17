import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { PersonInfo } from '../PersonInfo/PersonInfo';
import './Body.css';

export const Body = () => {
  const { selectedPerson } = useAppContext();

  return (
    <div className='body'>
      <h2 className='heading'>Type in to see the results</h2>

      <Autocomplete />

      {Boolean(selectedPerson) && (
        <PersonInfo />
      )}
    </div>
  )
};
