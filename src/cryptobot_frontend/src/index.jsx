import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, useNavigate, Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Dashboard from './routes/dashboard/dashboard';
import CreateInvestment from './routes/create-investment/CreateInvestment';
import Login from './routes/login/Login';
import NewInvestMents from './routes/new-investments/NewInvestMents';
import Investments from './routes/Investments/Investments';
import InvestmentHistory from './routes/investment-history/InvestmentHistory';
import { Provider } from "react-redux";
import store from "./store/store";
import { useDispatch, useSelector } from 'react-redux'
import { setAuthState } from './store/auth/auth.reducer'


// Add routes to following function
export default function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.AuthSlice);
  useEffect(() => {
    dispatch(setAuthState());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated])


  return (
    <Routes>
      {isAuthenticated
        ? <>
          <Route path='/' element={<Dashboard />} />
          <Route path='/investments' element={<Investments />} />
          <Route path='/create-investments' element={<CreateInvestment />} />
          <Route path='/investment-history' element={<InvestmentHistory />} />
          <Route path='/new-investments' element={<NewInvestMents />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </> :
        <>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Navigate to="/login" />} />
        </>
      }
    </Routes>
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