
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

    // إخفاء شاشة التحميل فور بدء رندر React
    const hideLoader = (window as any).hideAppLoader;
    if (typeof hideLoader === 'function') {
      hideLoader();
    }
  } catch (error) {
    console.error('Critical Render Error:', error);
    // في حالة الخطأ، نخفي اللودر أيضاً ونظهر رسالة الخطأ البديلة
    const hideLoader = (window as any).hideAppLoader;
    if (typeof hideLoader === 'function') hideLoader();
    
    const fallback = document.getElementById('fallback-error');
    if (fallback) fallback.style.display = 'flex';
  }
};

// تشغيل التطبيق عند جاهزية المستند
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

// أمان إضافي: إخفاء اللودر بعد ثانيتين كحد أقصى مهما كانت الظروف
setTimeout(() => {
  const hideLoader = (window as any).hideAppLoader;
  if (typeof hideLoader === 'function') hideLoader();
}, 2000);
