import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Dashboard from './routes/dashboard/dashboard';
import CreateInvestment from './routes/create-investment/CreateInvestment';
import Login from './routes/login/Login';
import NewInvestMents from './routes/new-investments/NewInvestMents';
import Investments from './routes/investments/Investments';
import InvestmentHistory from './routes/investment-history/InvestmentHistory';
import { Provider } from "react-redux";
import store from "./store/store";


// Add routes to following function
export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='investments' element={<Investments />} />
        <Route path="create-investments" element={<CreateInvestment />} />
        <Route path='investment-history' element={<InvestmentHistory />} />
        <Route path='new-investments' element={<NewInvestMents />} />
        {/* <Route path='login' element={<Login />} /> */}

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
        <Link to="/">Go to the login page</Link>
      </p>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);