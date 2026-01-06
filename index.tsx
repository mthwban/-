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

    // إخفاء الشاشة السوداء فوراً
    if ((window as any).hideAppLoader) {
      (window as any).hideAppLoader();
    }
  } catch (error) {
    console.error('Critical Render Error:', error);
    if ((window as any).hideAppLoader) (window as any).hideAppLoader();
    const fallback = document.getElementById('fallback-error');
    if (fallback) fallback.style.display = 'flex';
  }
};

// تشغيل عند الجاهزية
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

// محاولة أخيرة للإخفاء
setTimeout(() => {
  if ((window as any).hideAppLoader) (window as any).hideAppLoader();
}, 2000);
