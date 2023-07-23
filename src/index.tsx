import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
            <Routes>
                <Route path="/:name" element={<App />} />
            </Routes>
        </BrowserRouter>
);
