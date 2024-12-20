import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusRoutes from './routes/bus.routes';
import UserRoutes from './routes/user.routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bus/*" element={<BusRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
