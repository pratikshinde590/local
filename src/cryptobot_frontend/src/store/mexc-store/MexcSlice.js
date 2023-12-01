import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/AxiosInstance"

export const mexcBuyOrder = async (orderData) => {
    try {
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
}

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


export const getMexcDipositedStatus = createAsyncThunk("mexc/getMexcDipositedStatus", async () => {
    try {
        const { data } = await AxiosInstance.get("/mexc/deposit");
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getMexcWalletStatus = createAsyncThunk("mexc/getMexcWalletStatus", async () => {
    try {
        const { data } = await AxiosInstance.get("/mexc/wallet");
        return data
    } catch (error) {
        console.log(error)
    }
})


const MexcSlice = createSlice({
    name: "mexc",
    initialState: {
        depositedStatus: "",
        walletStatus: ""
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getMexcDipositedStatus.fulfilled, (state, action) => {
            state.depositedStatus = action.payload
        })
        builder.addCase(getMexcWalletStatus.fulfilled, (state, action) => {
            state.walletStatus = action.payload
        })
    }
})

export default MexcSlice.reducer