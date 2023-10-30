import FontFaceObserver from 'fontfaceobserver';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-open-sans';
import App from './App.tsx';
import './index.scss';

const observer = new FontFaceObserver('Open Sans');

observer
  .load()
  .finally(() => {
    const root = document.getElementById('root');
    if (root) {
      ReactDOM.createRoot(root).render(
        <React.StrictMode>
          <BrowserRouter
            basename={
              window.location.host === 'www.ommish.com'
                ? 'character-sheets'
                : undefined
            }
          >
            <App />
          </BrowserRouter>
        </React.StrictMode>,
      );
    }
  })
  .catch(() => {
    console.warn('Failed to load font');
  });
