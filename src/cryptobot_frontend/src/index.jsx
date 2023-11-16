import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Dashboard from './routes/dashboard/dashboard';
import CreateInvestment from './routes/create-investment/CreateInvestment';
import Login from './routes/login/Login';
import ICP from './routes/login/ICP';
import NewInvestMents from './routes/new-investments/NewInvestMents';
import Investments from './routes/Investments/Investments';
import Home from './routes/home';


// Add routes to following function
export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='investments' element={<Investments />} />
        <Route path="create-investments" element={<CreateInvestment />} />
        <Route path='new-investments' element={<NewInvestMents />} />
        <Route path='login' element={<Login />} />
        <Route path='login/ICP' element={<ICP />} />

        {/* Using path="*"" means "match anything", so this route acts like a catch-all for URLs that we don't have explicit routes for. */}
        <Route path="*" element={<NoMatch />} />

      </Route>
    </Routes>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);