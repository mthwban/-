import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * Main Entry Point for Mohamed Thoban's Dossier.
 */

const hideLoader = () => {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 800);
  }
};

const initializeApp = () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Attempt to hide loader as soon as possible
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      // Fallback: Force hide after 3 seconds if load event fails to fire
      setTimeout(hideLoader, 3000);
    }
  }
};

try {
  initializeApp();
} catch (error) {
  console.error('Core Initialization Failure:', error);
  const loader = document.getElementById('app-loader');
  if (loader) loader.style.display = 'none'; // Force hide on error
  const fallback = document.getElementById('fallback-error');
  if (fallback) fallback.style.display = 'flex';
}
