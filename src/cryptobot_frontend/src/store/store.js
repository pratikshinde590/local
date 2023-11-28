import { configureStore } from '@reduxjs/toolkit'
import NewInvestSlice from "./common/NewInvestReducer"
import GateIoSlice from './gate-io-store/GateIoSlice';
import MexcSlice from './mexc-store/MexcSlice';

const store = configureStore({
    reducer: {
        MexcStore: MexcSlice,
        GateIoStore: GateIoSlice,
        NewInvest: NewInvestSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;
