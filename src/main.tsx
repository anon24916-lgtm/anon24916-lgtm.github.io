import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log('ENTRY: loaded');
window.addEventListener('error', e => {
  console.error('UNCAUGHT ERROR:', e.error || e.message || e);
});
window.addEventListener('unhandledrejection', e => {
  console.error('UNHANDLED REJECTION:', e.reason);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
