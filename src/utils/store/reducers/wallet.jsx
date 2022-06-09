import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        connected: false,
        address: ""
    },
    reducers: {
        setWallet: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
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