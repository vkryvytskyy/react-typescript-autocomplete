import React from 'react';
import './App.css';
import { Body } from './components/Body/Body';
import { AppContextProvider } from './contexts/AppContext';

export const App = () => {
  return (
    <AppContextProvider>
      <div className="app">
        <header className="header">
          <h1>
            Simple autocomplete
          </h1>
        </header>

        <Body />
      </div>
    </AppContextProvider>
  );
}
