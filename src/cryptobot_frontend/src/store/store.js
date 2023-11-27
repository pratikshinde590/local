import { configureStore } from '@reduxjs/toolkit'
import MexcSymbolSlice from './mexc-store/MexcSlice';
import GateIoSymbolSlice from "./gate-io-store/GateIoSlice";
import NewInvestSlice from "./common/NewInvestReducer"

const store = configureStore({
    reducer: {
        MexcSymbols: MexcSymbolSlice,
        GateIoSymbols: GateIoSymbolSlice,
        NewInvest: NewInvestSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;
