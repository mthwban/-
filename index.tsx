import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const startApp = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // إخفاء الشاشة السوداء فوراً بعد الرندر
    if ((window as any).hideAppLoader) {
      (window as any).hideAppLoader();
    }
  } catch (error) {
    console.error('Render Error:', error);
    document.getElementById('app-loader')!.style.display = 'none';
    document.getElementById('fallback-error')!.style.display = 'flex';
  }
};

// التأكد من تشغيل الكود حتى لو تأخر تحميل الصفحة
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  startApp();
} else {
  window.addEventListener('DOMContentLoaded', startApp);
}

// مؤقت احتياطي نهائي
setTimeout(() => {
  const loader = document.getElementById('app-loader');
  if (loader && loader.style.display !== 'none') {
    (window as any).hideAppLoader?.();
  }
}, 3500);
