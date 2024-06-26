import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/shared/globals.css.ts';
import App from '@/pages/App.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
