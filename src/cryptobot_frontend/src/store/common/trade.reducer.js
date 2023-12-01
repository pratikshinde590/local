import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosInstance"

export const getTrades = createAsyncThunk("trades/getTrades", () => {
    try {
        let array = localStorage.getItem("tradeArray");
        array = JSON.parse(array);
        if (array)
            return array;
        return [];
    } catch (error) {
        console.log(error);
    }
});

export const storeTrades = createAsyncThunk("trades/storeTrades", (tradeArray) => {
    try {
        let array = localStorage.getItem("tradeArray");
        if (array) {
            array = JSON.parse(array);
            const newArray = [...array, ...tradeArray];
            return newArray;
        }
        return tradeArray;
    } catch (error) {
        console.log(error);
    }
});

const TradeSlice = createSlice({
    name: "trades",
    initialState: {
        tradeArray: []
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(storeTrades.fulfilled, (state, action) => {
            state.tradeArray = action.payload
            localStorage.setItem("tradeArray", JSON.stringify(action.payload));
        })
        builder.addCase(getTrades.fulfilled, (state, action) => {
            state.tradeArray = action.payload;
        })
    }
})

export default TradeSlice.reducer