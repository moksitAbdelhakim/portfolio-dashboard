import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

const domNode = document.getElementById('root');

if (!domNode) {
  throw new Error("Root element with id 'root' not found in the DOM.");
}

const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
