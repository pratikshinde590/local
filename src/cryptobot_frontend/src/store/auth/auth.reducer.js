import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthClient } from '@dfinity/auth-client';

export const setAuthState = createAsyncThunk("auth/setAuthState", async () => {
    try {
        const authClient = await AuthClient.create();
        const authState = await authClient.isAuthenticated()
        return authState;
    } catch (error) {
        console.log(error);
    }
})

export const handleLogin = createAsyncThunk("auth/handleLogin", async () => {
    try {
        const client = await AuthClient.create();
        await client.login({ identityProvider: 'https://identity.ic0.app' });
        return true;
    } catch (error) {
        console.log(error);
    }
})

export const handleLogout = createAsyncThunk("auth/handleLogout", async () => {
    try {
        const client = await AuthClient.create();
        await client.logout();
        console.log(client)
        return false;
    } catch (error) {
        console.log(error);
    }
})


const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(setAuthState.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload;
        })
        builder.addCase(handleLogout.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload;
        })
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload;
        })
    }
})

export default AuthSlice.reducer