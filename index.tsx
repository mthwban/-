
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

    // إخفاء شاشة التحميل بمجرد محاولة الرندر
    const hideLoader = (window as any).hideAppLoader;
    if (typeof hideLoader === 'function') {
      setTimeout(hideLoader, 200);
    }
  } catch (error) {
    console.error('Render Error:', error);
    const hideLoader = (window as any).hideAppLoader;
    if (typeof hideLoader === 'function') hideLoader();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

// صمام أمان نهائي لضمان اختفاء السواد مهما حدث
setTimeout(() => {
  const hideLoader = (window as any).hideAppLoader;
  if (typeof hideLoader === 'function') hideLoader();
}, 3000);
