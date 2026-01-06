import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * Main Entry Point for Mohamed Thoban's Dossier.
 */

const initializeApp = () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Call the global helper defined in index.html
    if (typeof (window as any).hideAppLoader === 'function') {
      if (document.readyState === 'complete') {
        (window as any).hideAppLoader();
      } else {
        window.addEventListener('load', () => (window as any).hideAppLoader());
      }
    }
  }
};

try {
  initializeApp();
} catch (error) {
  console.error('Core Initialization Failure:', error);
  // Emergency hide
  const loader = document.getElementById('app-loader');
  if (loader) loader.style.display = 'none';
  const fallback = document.getElementById('fallback-error');
  if (fallback) fallback.style.display = 'flex';
}
