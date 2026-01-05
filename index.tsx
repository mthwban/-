
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// هذا الملف يعمل كمدخل رئيسي للتطبيق لضمان تحميل المكونات من App.tsx والمكونات الفرعية
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
