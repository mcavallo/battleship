import './App.css';

import { ErrorBoundary } from 'react-error-boundary';

import { StateContextProvider } from '@/providers/StateContext';
import { ErrorScreen } from '@/screens/ErrorScreen';

import { Game } from './Game';

export const App = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorScreen}>
      <StateContextProvider>
        <Game />
      </StateContextProvider>
    </ErrorBoundary>
  );
};
