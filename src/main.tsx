import FontFaceObserver from 'fontfaceobserver';
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
        <BrowserRouter
          basename={
            window.location.host === 'www.ommish.com'
              ? 'character-sheets'
              : undefined
          }
        >
          <App />
        </BrowserRouter>,
      );
    }
  })
  .catch(() => {
    console.warn('Failed to load font');
  });
