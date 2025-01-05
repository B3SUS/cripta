import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './slices/currencySlice'

const store = configureStore({
    reducer: {
        currency: currencyReducer,
    },
})

export default store;