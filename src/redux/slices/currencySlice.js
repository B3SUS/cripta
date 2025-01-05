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



export const fetchCurrencyData = createAsyncThunk(
    "currency/FetchCurrencyData",
    async (_, { dispatch }) =>{
        const data = [
            {
                "id": "bitcoin",
                "symbol": "BTC",
                "name": "Bitcoin",
                "priceUsd": "96610.0269279514332719",
                "type": "coin"
            },
            {
                "id": "ethereum",
                "symbol": "ETH",
                "name": "Ethereum",
                "priceUsd": "3451.2696433917117164",
                "type": "coin"
            },
            {
                "id": "tether",
                "symbol": "USDT",
                "name": "Tether",
                "priceUsd": "0.9989979809598974",
                "type": "coin"
            },
            {
                "id": "binance-coin",
                "symbol": "BNB",
                "name": "BNB",
                "priceUsd": "702.2011000499002464",
                "type": "coin"
            },
            {
                "id": "xrp",
                "symbol": "XRP",
                "name": "XRP",
                "priceUsd": "2.4185961712037480",
                "type": "coin"
            },
            {
                "id": "solana",
                "symbol": "SOL",
                "name": "Solana",
                "priceUsd": "211.9391309923804886",
                "type": "coin"
            },
            {
                "id": "dogecoin",
                "symbol": "DOGE",
                "name": "Dogecoin",
                "priceUsd": "0.3422210603034359",
                "type": "coin"
            },
            {
                "id": "usd-coin",
                "symbol": "USDC",
                "name": "USDC",
                "priceUsd": "0.9995069604215332",
                "type": "coin"
            },
            {
                "id": "cardano",
                "symbol": "ADA",
                "name": "Cardano",
                "priceUsd": "1.0758804518022084",
                "type": "coin"
            },
            {
                "id": "tron",
                "symbol": "TRX",
                "name": "TRON",
                "priceUsd": "0.2623663730528061",
                "type": "coin"
            },
            {
                "id": "avalanche",
                "symbol": "AVAX",
                "name": "Avalanche",
                "priceUsd": "41.1658110718888484",
                "type": "coin"
            },
            {
                "id": "shiba-inu",
                "symbol": "SHIB",
                "name": "Shiba Inu",
                "priceUsd": "0.0000229507191741",
                "type": "coin"
            },
            {
                "id": "polkadot",
                "symbol": "DOT",
                "name": "Polkadot",
                "priceUsd": "7.6337107098689503",
                "type": "coin"
            },
            {
                "id": "litecoin",
                "symbol": "LTC",
                "name": "Litecoin",
                "priceUsd": "106.6380080514354356",
                "type": "coin"
            },
            {
                "id": "near-protocol",
                "symbol": "NEAR",
                "name": "NEAR Protocol",
                "priceUsd": "5.6087344145822492",
                "type": "coin"
            },
            {
                "id": "monero",
                "symbol": "XMR",
                "name": "Monero",
                "priceUsd": "204.3314109732098467",
                "type": "coin"
            },
            {
                "id": "russian-ruble",
                "symbol": "RUB",
                "name": "Фиат RUB",
                "priceUsd": "0.0089292150495812",
                "type": "fiat"
            },
            {
                "id": "georgian-lari",
                "symbol": "GEL",
                "name": "Фиат GEL",
                "priceUsd": "0.3552397868561279",
                "type": "fiat"
            }
        ]
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

        const btc = updatedData.find((currency) => currency.symbol === "BTC");
        const eth = updatedData.find((currency) => currency.symbol === "ETH");

        const btcToEthRate = parseFloat(btc.priceUsd) / parseFloat(eth.priceUsd)

        dispatch(setFromCurrency(btc))
        dispatch(setToCurrency(eth))
        dispatch(setExchangeRate(btcToEthRate))
    }
)


const initialState = {
    currencyOptions: [],
    fromCurrency: '',
    toCurrency: '',
    exchangeRate: null,
    fromAmount: null,
    toAmount: null
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
        }

    },
})


export const {
    setFromAmount,
    setToAmount,
    setCurrencyOptions,
    setExchangeRate,
    setFromCurrency,
    setToCurrency,
    swapCurrencies
} = currencySlice.actions

export default currencySlice.reducer