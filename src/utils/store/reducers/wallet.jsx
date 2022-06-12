import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        connected: false,
        address: ""
    },
    reducers: {
        setWallet: (state, action) => {
            state.connected = action.payload
        },
        setWalletAddress: (state, action) => {
            state.address = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setWallet, setWalletAddress } = walletSlice.actions

export default walletSlice.reducer