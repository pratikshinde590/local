import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosInstance"
import { ExchangeArray, Exchanges } from "../../utils/Constants";


export const getSymbols = createAsyncThunk("new-invest/getSymbols", async (exchange) => {
    try {
        let url = "";
        ExchangeArray.map((val) => { if (exchange === val.value) url = `${val.API}/default-symbols` })
        const { data } = await AxiosInstance.get(url);
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getSymbolPrice = createAsyncThunk("new-invest/getSymbolPrice", async ({ exchange, symbol }) => {
    try {
        let url = "";
        ExchangeArray.map((val) => { if (exchange === val.value) url = `${val.API}/symbol-price` })
        const { data } = await AxiosInstance.get(`${url}?symbol=${symbol}`)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const setExchange = createAsyncThunk("new-invest/setExchange", async (exchange) => {
    try {
        return exchange;
    } catch (error) {
        console.log(error)
    }
})

export const resetSymbolList = createAsyncThunk("new-invest/resetSymbolList", async () => {
    try {
        return ""
    } catch (error) {
        console.log(error);
    }
})

export const setSymbol = createAsyncThunk("new-invest/setSymbol", async (symbol) => {
    try {
        return symbol;
    } catch (error) {
        console.log(error)
    }
})


export const resetSymbolPrice = createAsyncThunk("new-invest/resetSymbolPrice", async () => {
    try {
        return ""
    } catch (error) {
        console.log(error)
    }
})



const NewInvestSlice = createSlice({
    name: "new-invest",
    initialState: {
        selectedExchange: "",
        symbolList: [],
        selectedSymbol: "",
        selectedSymbolPrice: ""
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(setExchange.fulfilled, (state, action) => {
            state.selectedExchange = action.payload;
        })
        builder.addCase(getSymbols.fulfilled, (state, action) => {
            state.symbolList = action.payload?.data;
        })
        builder.addCase(setSymbol.fulfilled, (state, action) => {
            state.selectedSymbol = action.payload;
        })
        builder.addCase(getSymbolPrice.fulfilled, (state, action) => {
            state.selectedSymbolPrice = action.payload?.price;
        })
        builder.addCase(resetSymbolPrice.fulfilled, (state) => {
            state.selectedSymbolPrice = "";
        })
        builder.addCase(resetSymbolList.fulfilled, (state) => {
            state.symbolList = [];
        })
    }
})

export default NewInvestSlice.reducer