
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const mountApp = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // إخفاء شاشة التحميل فوراً عند بدء التنفيذ
    setTimeout(() => {
      const hideLoader = (window as any).hideAppLoader;
      if (typeof hideLoader === 'function') {
        hideLoader();
      }
    }, 100);
  } catch (error) {
    console.error('Critical Render Error:', error);
    const hideLoader = (window as any).hideAppLoader;
    if (typeof hideLoader === 'function') hideLoader();
    
    const fallback = document.getElementById('fallback-error');
    if (fallback) fallback.style.display = 'flex';
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

// صمام أمان نهائي
setTimeout(() => {
  const hideLoader = (window as any).hideAppLoader;
  if (typeof hideLoader === 'function') hideLoader();
}, 2500);
