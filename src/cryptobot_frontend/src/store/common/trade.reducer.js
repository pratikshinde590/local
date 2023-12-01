import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosInstance";

export const getTrades = createAsyncThunk("trades/getTrades", () => {
    try {
        let array = localStorage.getItem("allTrades");
        array = JSON.parse(array);
        if (array)
            return array;
        return [];
    } catch (error) {
        console.log(error);
    }
});

export const storeTrades = createAsyncThunk("trades/storeTrades", (tradeObj) => {
    try {
        let array = localStorage.getItem("allTrades");
        if (array) {
            array = JSON.parse(array);
            const newArray = [...array, tradeObj];
            return newArray;
        }
        return [tradeObj];
    } catch (error) {
        console.log(error);
    }
});


const TradeSlice = createSlice({
    name: "trades",
    initialState: {
        allTrades: []
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(storeTrades.fulfilled, (state, action) => {
            state.allTrades = action.payload
            localStorage.setItem("allTrades", JSON.stringify(action.payload));
        })
        builder.addCase(getTrades.fulfilled, (state, action) => {
            state.allTrades = action.payload;
        })
    }
})

export default TradeSlice.reducer