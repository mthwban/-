import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * Main Entry Point for Mohamed Thoban's Dossier.
 * This file is automatically imported by index.html as an ES6 module.
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
    
    // Hide the app loader once React has mounted and the window is loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('app-loader');
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 1200);
        }
      }, 1000);
    });
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
