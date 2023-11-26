import { configureStore } from '@reduxjs/toolkit'
import MexcSymbolSlice from './mexc-store/MexcSymbolSlice';

const store = configureStore({
    reducer: {
        MexcSymbols: MexcSymbolSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;
