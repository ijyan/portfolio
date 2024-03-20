import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/shared/globals.css.ts';
import App from '@/pages/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
