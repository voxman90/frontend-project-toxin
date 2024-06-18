import './assets/css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from './components/App';
import resources from './locales/index.js';

import reportWebVitals from './reportWebVitals';

const i18nextConfig = {
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
};

const app = async () => {
  await i18next
    .use(initReactI18next)
    .init(i18nextConfig);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next} defaultNS="translation">
        <App />
      </I18nextProvider>
    </React.StrictMode>,
  );
};

app();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
