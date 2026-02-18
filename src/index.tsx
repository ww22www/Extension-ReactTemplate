import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';

// Choose the root container for the extension's main UI
const rootContainer = document.getElementById('extensions_settings');
if (!rootContainer) {
  throw new Error('Could not find #extensions_settings root container.');
}

const rootElement = document.createElement('div');
rootContainer.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
