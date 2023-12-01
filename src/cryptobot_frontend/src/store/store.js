import { configureStore } from '@reduxjs/toolkit'
import NewInvestSlice from "./common/NewInvestReducer"
import GateIoSlice from './gate-io-store/GateIoSlice';
import MexcSlice from './mexc-store/MexcSlice';
import AuthSlice from "./auth/auth.reducer";
import TradeSlice from "./common/trade.reducer";

const store = configureStore({
    reducer: {
        AuthSlice: AuthSlice,
        MexcStore: MexcSlice,
        GateIoStore: GateIoSlice,
        NewInvest: NewInvestSlice,
        Trades : TradeSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;
