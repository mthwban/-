
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

    // إخفاء شاشة التحميل بمجرد بدء رندر React
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

// التأكد من التشغيل عند جاهزية المستند
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

// أمان إضافي: إخفاء اللودر بعد وقت قصير جداً مهما حدث
setTimeout(() => {
  const hideLoader = (window as any).hideAppLoader;
  if (typeof hideLoader === 'function') hideLoader();
}, 1500);
