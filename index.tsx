
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

    // إخفاء شاشة التحميل فور بدء الرندر
    const hideLoader = (window as any).hideAppLoader;
    if (typeof hideLoader === 'function') {
      hideLoader();
    }
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

// أمان إضافي لإخفاء اللودر في حال تأخر الاستجابة
setTimeout(() => {
  const hideLoader = (window as any).hideAppLoader;
  if (typeof hideLoader === 'function') hideLoader();
}, 2000);
