import { StrictMode } from "react";
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container:HTMLElement | null = document.getElementById('root');
const root = ReactDOMClient.createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
