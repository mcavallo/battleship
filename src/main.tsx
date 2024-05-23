import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { StateContextProvider } from '@/providers/StateContext';
import { ErrorScreen } from '@/screens/ErrorScreen';

import App from './App.tsx';

import 'react-tooltip/dist/react-tooltip.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallbackRender={ErrorScreen}>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </ErrorBoundary>,
);
