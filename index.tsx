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
    }, 1200);
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
    
    // Check if the window is already loaded
    if (document.readyState === 'complete') {
      setTimeout(hideLoader, 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(hideLoader, 500);
      });
    }
  }
};

// Error handling to prevent blank screens
try {
  initializeApp();
} catch (error) {
  console.error('Core Initialization Failure:', error);
  const fallback = document.getElementById('fallback-error');
  if (fallback) fallback.style.display = 'flex';
  const loader = document.getElementById('app-loader');
  if (loader) loader.style.display = 'none';
}
