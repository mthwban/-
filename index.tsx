
import React from 'react';
// Updated import to react-dom/client for React 18 compatibility to fix createRoot error
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  // createRoot is now correctly accessed from react-dom/client
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}