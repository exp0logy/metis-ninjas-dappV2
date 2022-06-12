import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './reducers/wallet'

export default configureStore({
    reducer: {
        wallet: walletReducer
    },
})