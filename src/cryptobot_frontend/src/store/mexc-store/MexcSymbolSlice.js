import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosInstance"

export const get_MEXC_Symbols = createAsyncThunk("mexc/get_MEXC_Symbols", async () => {
    try {
        const { data } = await AxiosInstance.get("/mexc/default-symbols")
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getCurrencyPairPrice = createAsyncThunk("mexc/getCurrencyPairPrice", async (currencyPair) => {
    try {
        const { data } = await AxiosInstance.get(`/mexc/symbol-price?symbol=${currencyPair}`)
        return data
    } catch (error) {
        console.log(error)
    }
})

const MexcSymbolSlice = createSlice({
    name: "mexc",
    initialState: {
        mexc_symbols: [],
        mexc_symbol_price: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(get_MEXC_Symbols.fulfilled, (state, action) => {
            state.mexc_symbols = action.payload.data
        })
        builder.addCase(getCurrencyPairPrice.fulfilled, (state, action) => {
            state.mexc_symbol_price = action.payload.price
        })
    }
})

export default MexcSymbolSlice.reducer