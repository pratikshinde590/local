import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosInstance"

export const mexcBuyOrder = createAsyncThunk("mexc/placeOrder", async (orderData) => {
    try {
        console.log(orderData);
        const formData = new FormData();
        formData.append("symbol", orderData.symbol)
        formData.append("type", orderData.type)
        formData.append("quantity", orderData.quantity)
        formData.append("price", orderData.price)
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await AxiosInstance.post("/mexc/buy-order", formData, config);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const mexcSellOrder = createAsyncThunk("mexc/sellOrder", async (orderData) => {
    try {
        console.log(orderData);
        const formData = new FormData();
        formData.append("symbol", orderData.symbol)
        formData.append("type", orderData.type)
        formData.append("quantity", orderData.quantity)
        formData.append("price", orderData.price)
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await AxiosInstance.post("/mexc/sell-order", formData, config);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const get_MEXC_Symbols = createAsyncThunk("mexc/get_MEXC_Symbols", async () => {
    try {
        const { data } = await AxiosInstance.get("/mexc/default-symbols");
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