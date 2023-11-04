import FontFaceObserver from 'fontfaceobserver';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
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
        <HashRouter
          basename={
            window.location.host === 'www.ommish.com'
              ? 'character-sheets'
              : undefined
          }
        >
          <App />
        </HashRouter>,
      );
    }
  })
  .catch(() => {
    console.warn('Failed to load font');
  });
