import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import bitcoin from "../../svg/bitcoin-ico.png";
import ethereum from "../../svg/ethereum.png";
import tether from "../../svg/tether.png";
import bnb from "../../svg/bnb.png";
import solana from "../../svg/solana.png";
import usdc from "../../svg/usdc.png";
import xrp from "../../svg/xrp.png";
import dogecoin from "../../svg/dogecoin.png";
import shibainu from "../../svg/shiba-inu.png";
import cardano from "../../svg/cardano.png";
import avalanche from "../../svg/avalanche.png";
import tron from "../../svg/tron.png";
import polka from "../../svg/polkadot.png";
import near from "../../svg/near.png";
import litecoin from "../../svg/litecoin.png";
import monero from "../../svg/monero.png";
import ruble from "../../svg/ruble.png";
import lari from "../../svg/lari.png";
import api from "../../components/Api";
import {useSelector} from "react-redux";



export const fetchCurrencyData = createAsyncThunk(
    "currency/FetchCurrencyData",
    async (_, { dispatch }) =>{

        const data = await api.get('/coins')
            .then(response => response.data)

        const coinIcons ={
            'bitcoin': bitcoin,
            'ethereum': ethereum,
            'tether': tether,
            'binance-coin': bnb,
            'solana': solana,
            'usd-coin': usdc,
            'xrp': xrp,
            'dogecoin': dogecoin,
            'shiba-inu': shibainu,
            'cardano': cardano,
            'avalanche': avalanche,
            'tron': tron,
            'polkadot': polka,
            'near-protocol': near,
            'litecoin': litecoin,
            'monero': monero,
            'russian-ruble': ruble,
            'georgian-lari': lari
        }

        const updatedData = data.map(currency => ({
            ...currency,
            icon: coinIcons[currency.id]
        }));



        dispatch(setCurrencyOptions(updatedData));

        const tempRate = parseFloat(updatedData[0].priceUsd) / parseFloat(updatedData[1].priceUsd)



        dispatch(setFromCurrency(updatedData[0]))
        dispatch(setToCurrency(updatedData[1]))
        dispatch(setExchangeRate(tempRate))
        dispatch(setFromAmount(null))
    }
)


const initialState = {
    currencyOptions: [],
    fromCurrency: '',
    toCurrency: '',
    exchangeRate: null,
    fromAmount: null,
    toAmount: null,
    cryptoAddress: '',
    status: 0,
    email: '',
    promocode: '',
    transactionId: null,
    burger: false
}



export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {

        setCurrencyOptions(state, action){
            state.currencyOptions= action.payload
        },
        setFromCurrency(state, action){
            state.fromCurrency = action.payload
        },
        setToCurrency(state, action){
            state.toCurrency = action.payload
        },
        setExchangeRate(state,action){
            state.exchangeRate = action.payload
        },
        setFromAmount(state,action){
            state.fromAmount = action.payload
            state.toAmount = (action.payload * state.exchangeRate).toFixed(3)
        },
        setToAmount(state,action){
            state.toAmount = action.payload
            state.fromAmount = (action.payload / state.exchangeRate).toFixed(3)
        },
        swapCurrencies(state){
            [state.fromCurrency, state.toCurrency] = [state.toCurrency, state.fromCurrency];

            const fromCurrencyRate = parseFloat(state.fromCurrency.priceUsd);
            const toCurrencyRate = parseFloat(state.toCurrency.priceUsd);

            state.exchangeRate = fromCurrencyRate / toCurrencyRate;

            [state.toAmount, state.fromAmount] = [state.fromAmount, state.toAmount];
        },
        setCryptoAddress(state, action){
            state.cryptoAddress = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        },
        setEmail(state, action){
            state.email = action.payload;
        },
        setPromocode(state, action){
            state.promocode = action.payload;
        },
        setTransactionId(state, action){
            state.transactionId = action.payload;
        },
        resetEmailAndWallet(state) {
            state.email = '';
            state.cryptoAddress = '';
        },
        setBurger(state){
            state.burger = !state.burger;
        },
    },
})


export const {
    setFromAmount,
    setToAmount,
    setCurrencyOptions,
    setExchangeRate,
    setFromCurrency,
    setToCurrency,
    swapCurrencies,
    setCryptoAddress,
    setStatus,
    setEmail,
    setPromocode,
    setTransactionId,
    resetEmailAndWallet,
    setBurger
} = currencySlice.actions

export default currencySlice.reducer