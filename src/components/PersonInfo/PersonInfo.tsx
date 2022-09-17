import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import './PersonInfo.css';

export const PersonInfo = () => {
  const { selectedPerson, setSelectedPerson } = useAppContext();

  return (
    <div className='personContainer'>
      <h2>{selectedPerson?.name}</h2>
      <ul>
        <li>height: {selectedPerson?.height}</li>
        <li>mass: {selectedPerson?.mass}</li>
        <li>hairColor: {selectedPerson?.hair_color}</li>
        <li>hairColor: {selectedPerson?.skin_color}</li>
      </ul>

      <button onClick={() => {
        if (setSelectedPerson) {
          setSelectedPerson(null)
        }
      }}>
        close
      </button>
    </div>
  )
}
