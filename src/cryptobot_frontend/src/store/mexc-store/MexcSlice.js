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


const MexcSlice = createSlice({
    name: "mexc",
    initialState: {},
    reducers: {},

    extraReducers: (builder) => {

    }
})

export default MexcSlice.reducer