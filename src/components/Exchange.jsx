import {useDispatch, useSelector} from "react-redux";
import {
    setFromCurrency,
    setToCurrency,
    setExchangeRate,
    setFromAmount,
    setToAmount,
    swapCurrencies, setStatus, fetchCurrencyData, resetEmailAndWallet, setPromocode, resetAmounts
} from "../redux/slices/currencySlice";
import {useEffect, useRef, useState} from "react";
import triangle from '../svg/triangle.svg'
import reverse from '../svg/reverse.svg'
import errorimg from '../svg/error.png'
import quest from '../svg/quest.svg'
import course from '../svg/course.png'
import Overlay from "./Overlay";
import {Link, useNavigate} from "react-router-dom";
const Exchange = () => {





    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCurrencyData())
        document.getElementById('from-input').value = null
        document.getElementById('to-input').value = null
    },[dispatch])

    const {
        currencyOptions,
        fromCurrency,
        toCurrency,
        fromAmount,
        toAmount,
        exchangeRate
    } = useSelector((state)=> state.currency)





    const handleFromAmountChange = (e) =>{
        dispatch(setFromAmount(parseFloat(e.target.value)))
        if (error){
            setError(false)
        }
    }

    const handleToAmountChange = (e) =>{
        dispatch(setToAmount(parseFloat(e.target.value)))
    }

    const handleFromCurrencyChange = (currencySymbol) => {
        const newFromCurrency = currencyOptions.find(
            (currency) => currency.symbol === currencySymbol
        )
        if(newFromCurrency){
            const newExchangeRate = parseFloat(newFromCurrency.priceUsd) / parseFloat(toCurrency.priceUsd)

            dispatch(setFromCurrency(newFromCurrency))
            dispatch(setExchangeRate(newExchangeRate))
            dispatch(setToAmount(fromAmount * newExchangeRate))
        }
    }

    const handleToCurrencyChange = (currencySymbol) => {
        const newToCurrency = currencyOptions.find(
            (currency) => currency.symbol === currencySymbol
        );

        if (newToCurrency) {
            const newExchangeRate =
                parseFloat(fromCurrency.priceUsd) / parseFloat(newToCurrency.priceUsd);

            dispatch(setToCurrency(newToCurrency));
            dispatch(setExchangeRate(newExchangeRate));
            dispatch(setToAmount(fromAmount * newExchangeRate));
        }
    };

    const handleKeyPress = (e) => {
        const allowedCharacters = /^[0-9.]*$/;
        if (!allowedCharacters.test(e.key) && e.keyCode !== 8) {
            e.preventDefault();
        }
    };

    const handleVisibilityClick = () => {
        setVisible(!visible)
    }
    const handleVisibilityClick2 = () => {
        setVisible2(!visible2)
    }

    const discount = () => {
        if (fromAmount * fromCurrency.priceUsd > 0 && fromAmount * fromCurrency.priceUsd < 500) return 0.05
        if (fromAmount * fromCurrency.priceUsd >= 500 && fromAmount * fromCurrency.priceUsd < 1000) return 0.1
        if (fromAmount * fromCurrency.priceUsd >= 1000 && fromAmount * fromCurrency.priceUsd < 2000) return 0.12
        if (fromAmount * fromCurrency.priceUsd >= 2000 && fromAmount * fromCurrency.priceUsd < 3000) return 0.14
        if (fromAmount * fromCurrency.priceUsd >= 3000 && fromAmount * fromCurrency.priceUsd < 5000) return 0.16
        if (fromAmount * fromCurrency.priceUsd >= 5000 && fromAmount * fromCurrency.priceUsd < 10000) return 0.18
        if (fromAmount * fromCurrency.priceUsd >= 10000) return 0.2
        else return 0
    }

    useEffect(() => {
        const fun = () => {
            if (visible || visible2) {
                document.body.style.overflowY = "hidden";
            } else {
                document.body.style.overflowY = "auto";
            }
        };

        fun();

        // Чистим стили при размонтировании
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [visible, visible2]);

    const [searchValue, setSearchValue] = useState('');
    const [filteredCoins, setFilteredCoins] = useState(currencyOptions);

    useEffect(() => {
        setFilteredCoins(currencyOptions);
    }, [currencyOptions]);
    const handleSearchChange = (e) => {

        const searchValue = e.target.value;
        setSearchValue(searchValue);
        const filteredCoins = currencyOptions.filter((coin) => {
            const coinName = coin.name.toLowerCase();
            const coinSymbol = coin.symbol.toLowerCase();
            const searchValueLower = searchValue.toLowerCase();
            return coinName.includes(searchValueLower) || coinSymbol.includes(searchValueLower);
        });
        setFilteredCoins(filteredCoins);
    };

    const handleSearchChange2 = (e) => {

        const searchValue = e.target.value;
        setSearchValue(searchValue);
        const filteredCoins2 = currencyOptions.filter((coin) => {
            const coinName = coin.name.toLowerCase();
            const coinSymbol = coin.symbol.toLowerCase();
            const searchValueLower = searchValue.toLowerCase();
            return coinName.includes(searchValueLower) || coinSymbol.includes(searchValueLower);
        });
        setFilteredCoins(filteredCoins2);
    };

    let navigate = useNavigate();

    const [error, setError] = useState(false)
    const inputRef = useRef(null);

    const handleNavigation = () =>{
        if (fromAmount === 0 || fromAmount === '' || isNaN(fromAmount) || fromAmount === null){
            setError(true)
            inputRef.current.focus();
        }
        else {
            dispatch(setPromocode(promo))
            dispatch(resetEmailAndWallet())
            dispatch(setStatus(0))
            navigate('/transaction')
        }
    }

    const [promo, setPromo] = useState('')
    const handlePromoInput = (e) => {
        const inputValue = e.target.value;
        setPromo(inputValue);
    };


    return(
      <div className={'flex flex-col items-center w-full py-[32px] px-[16px] rounded-[16px] bg-add text-white gap-[1.6rem] md:p-[3.2rem] md:w-[58.8rem]'}>
          <Overlay
              handleVisibilityClick={handleVisibilityClick}
              currencyOptions={currencyOptions}
              visible={visible}
              handleChangeClick={handleFromCurrencyChange}
              searchValue={searchValue}
              handleSearch={handleSearchChange}
              filtered={filteredCoins}
          />
          <Overlay
              handleVisibilityClick={handleVisibilityClick2}
              currencyOptions={currencyOptions}
              visible={visible2}
              handleChangeClick={handleToCurrencyChange}
              searchValue={searchValue}
              handleSearch={handleSearchChange2}
              filtered={filteredCoins}
          />
          <div className={'text-[2.2rem] font-semibold'}>Калькулятор</div>
          <div className={'flex flex-col gap-[.8rem] relative w-full'}>
              <div className={`input-row ${error ? 'border-red-600 border border-solid' : ''}`}>
                  <div className={'input-left'}>
                      <span className={'text-gray-400 text-[1.2rem] font-medium'}>
                          Отдаёте
                      </span>
                      <input id={'from-input'} className={'input-main'}
                            ref={inputRef} type="number" value={fromAmount} onChange={handleFromAmountChange} onKeyDown={handleKeyPress} placeholder={'0'}/>
                  </div>

                  <div className={'input-right'} onClick={()=>setVisible(true)}>
                      <img className={'h-[2.8rem] w-[2.8rem] mr-[.8rem]'} src={fromCurrency.icon} alt={fromCurrency.icon}/>
                      <span className={'leading-[1.2] uppercase font-semibold'}>
                          {fromCurrency.symbol}
                      </span>
                      <img className={'h-[.8rem] w-[.8rem] m-[.8rem] rotate-180'} src={triangle} alt={triangle}/>

                  </div>
              </div>
              <div className={'input-row'}>
                  <div className={'input-left'}>
                        <span className={'text-gray-400 text-[1.2rem] font-medium'}>
                      Получаете
                  </span>
                        <input id={'to-input'} className={'input-main'} type="number" value={toAmount} onChange={handleToAmountChange} onKeyDown={handleKeyPress}/>
                  </div>
                  <div className={'input-right'} onClick={() => setVisible2(true)}>
                      <img className={'h-[2.8rem] w-[2.8rem] mr-[.8rem]'} src={toCurrency.icon} alt={toCurrency.icon}/>
                      <span className={'leading-[1.2] uppercase font-semibold'}>
                          {toCurrency.symbol}
                      </span>
                      <img className={'h-[.8rem] w-[.8rem] m-[.8rem] rotate-180'} src={triangle} alt={triangle}/>
                  </div>
              </div>
              <button onClick={()=> dispatch(swapCurrencies())} className={'absolute z-20 h-[3.6rem] w-[3.6rem] bg-[#4683df] rounded-[12px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center'}>
                  <img className={'w-[1.125rem] rotate-90'} src={reverse} alt={reverse}/>
              </button>

          </div>
          <div className={'flex flex-col gap-[.8rem] text-[1.2rem] leading-[1.2] w-full'}>
              <div className={'flex items-center'}>
                  <img className={'w-[2.4rem] h-[2.4rem]'} src={course} alt={course}/>
                  <span className={'ml-[.4rem]'}>Курс</span>
                  <span className={'ml-auto'}>1 {fromCurrency.symbol} = {parseFloat(exchangeRate).toFixed(6)} {toCurrency.symbol}</span>
              </div>
              <div className={'flex items-center'}>
                  <img className={'w-[2.4rem] h-[2.4rem]'} src={errorimg} alt={errorimg}/>
                  <span className={'ml-[.4rem]'}>Загруженность сети BTC</span>
                  <div className={'ml-auto flex gap-[.4rem] items-center'}>
                      <span className={'bg-[#88df72] rounded-[4px] inline-block h-[1rem] w-[1.4rem]'}></span>
                      <span className={'bg-[#edf4fe] rounded-[4px] inline-block h-[1rem] w-[1.4rem]'}></span>
                      <span className={'bg-[#edf4fe] rounded-[4px] inline-block h-[1rem] w-[1.4rem]'}></span>
                      <span className={'bg-[#edf4fe] rounded-[4px] inline-block h-[1rem] w-[1.4rem]'}></span>
                  </div>
              </div>
              <div className={'flex items-center'}>
                  <img className={'w-[2.4rem] h-[2.4rem]'} src={quest} alt={quest}/>
                  <Link to={'/discount'} className={'ml-[.4rem]'}>
                      Скидка
                  </Link>
                  <span className={'ml-auto'}>{discount(fromAmount)}%</span>
              </div>


          </div>
          <div className={'w-full'}>
              <div className={'bg-main rounded-[8px] h-[5.2rem] px-[2.4rem]'}>
                  <input onInput={handlePromoInput} className={'bg-transparent w-full h-full focus:outline-none font-medium leading-[1]'} placeholder={'Промокод, необязательно'}/>
              </div>
          </div>


          <button onClick={handleNavigation} className={'bg-[#4683df] w-full rounded-[8px] text-[1.6rem] h-[5.2rem] px-[2rem]'}>
              <span className={'text-[#edf4fe]'}>
                  Далее
              </span>
          </button>

      </div>
  );
}
export default Exchange