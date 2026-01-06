
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * تأكد من أن جميع الاستيرادات في App.tsx تنتهي بـ .tsx ليعمل المترجم بشكل صحيح
 */

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Critical Start-up Error:", error);
    const loadingText = document.getElementById('loading-text');
    if (loadingText) {
      loadingText.innerText = "فشل في تشغيل المنصة. يرجى التحقق من الملفات.";
      loadingText.style.color = "#ef4444";
    }
  }
}
