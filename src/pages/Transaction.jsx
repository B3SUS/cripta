import {useDispatch, useSelector} from "react-redux";
import {use, useEffect, useRef, useState} from "react";
import {
    fetchCurrencyData,
    setCryptoAddress,
    setEmail,
    setStatus,
    setTransactionId
} from "../redux/slices/currencySlice";
import {Link, useNavigate} from "react-router-dom";
import copypng from '../svg/copy.png'
import axios from "axios";
import api from "../components/Api";

const Transaction = () => {

    const dispatch = useDispatch();

    const {
        fromCurrency,
        toCurrency,
        fromAmount,
        toAmount,
        cryptoAddress,
        status,
        transactionId,
        email,
        promocode
    } = useSelector((state)=> state.currency)

    const navigate = useNavigate();

    useEffect(() => {
        if (fromCurrency === ''){
            navigate('/')
        }
    },[])






    const [checked, setChecked] = useState(false)


    const generateTransactionId = () => {
        return Math.floor(Math.random() * 1000000);
    };

    const validateAddress = async (address, coin) => {
        try {
            const response = await api.post('/validator/address', {
                address,
                coin,
            });

            return response.data;
        } catch (error) {
            console.error('Error validating address:', error);
            return false;
        }
    };

    const validateEmail = async (email) => {
        try {
            const response = await api.post('/validator/email', {
                email,
            });

            return response.data;
        } catch (error) {
            console.error('Error validating address:', error);
            return false;
        }
    };

    const [addressError, setAddressError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const addressRef = useRef(null);
    const emailRef = useRef(null);

    const validate = async () => {
        const addressValid = validateAddress(cryptoAddress, toCurrency.symbol);
        const emailValid = validateEmail(email)
        if (addressValid && emailValid) {
            dispatch(setStatus(1))
        }
        else{
            setAddressError(!addressValid)
            setEmailError(!emailValid)
        }
    }


    const [emailValue, setEmailValue] = useState('');
    const [walletValue, setWalletValue] = useState('')


    const handleEmailInput = (e) => {
        const inputValue = e.target.value;
        setEmailValue(inputValue);

        if (emailError) {
            setEmailError(false);
        }
    };

    const handleWalletInput = (e) => {
        const inputValue = e.target.value;
        setWalletValue(inputValue);

        if (addressError) {
            setAddressError(false);
        }
    };


    const setInfo = () => {
        const newTransactionId = generateTransactionId();
        dispatch(setTransactionId(newTransactionId));
        dispatch(setEmail(emailValue))
        dispatch(setCryptoAddress(walletValue));
    }


    const handleClickFirst = async (event) => {
        event.preventDefault()
        await setInfo()
        validate()
    }




    const handleClickSecond = (event) => {
      event.preventDefault();
      dispatch(setStatus(2));
      let currency1 = fromCurrency.symbol;
      let currency2 = toCurrency.symbol;
      api.post('/coins/send-mes', {
          transactionId,
          fromAmount,
          currency1,
          toAmount,
          currency2,
          cryptoAddress,
          promocode
      })
    }

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState('')
    useEffect(() => {(
        async () => {
            try {
                const response = await fetch(`https://66d42d0a5b34bcb9ab3ddbec.mockapi.io/address?id=${fromCurrency.symbol}`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, [fromCurrency]);


  return(
      <div className={'py-[48px] w-full md:py-[9.6rem]'}>
          <div className={'pb-[80px] relative gap-[24px] px-[16px] flex flex-col-reverse md:pb-[9rem] md:px-[32px] md:box-content md:mx-auto md:max-w-[1200px] md:flex-row'}>

              <div className={'w-full flex flex-col shrink-0 gap-[3.2rem] p-[16px] bg-add rounded-[16px] md:w-[304px] md:p-[3.2rem] lg:w-[43.5rem]'}>
                  <h3 className={'text-[18px] leading-[normal] lg:text-[2.2rem]'}>Информация об операции</h3>
                  <div className={'transaction-first-row'}>
                      <div className={'transaction-first-row-1div'}>Отдаёте</div>
                      <div className={'flex items-center justify-between'}>
                          <span className={'transaction-first-row-span'}>{fromAmount}</span>
                          <div className={'transaction-first-row-right'}>
                              <img src={fromCurrency.icon} alt={fromCurrency.icon}/>
                              <span>{fromCurrency.symbol}</span>
                          </div>
                      </div>
                  </div>
                  <div className={'transaction-first-row'}>
                      <div className={'transaction-first-row-1div'}>Получаете</div>
                      <div className={'flex items-center justify-between'}>
                          <span className={'transaction-first-row-span'}>{toAmount}</span>
                          <div className={'transaction-first-row-right'}>
                              <img src={toCurrency.icon} alt={toCurrency.icon}/>
                              <span>{toCurrency.symbol}</span>
                          </div>
                      </div>
                  </div>

                  {(status !== 0) &&
                      <div className={'transaction-first-row'}>
                          <div className={'transaction-first-row-1div'}>Кошелёк</div>
                          <span className={'text-[22px] break-words'}>{cryptoAddress}</span>
                      </div>
                  }

              </div>

              <div className={'overflow-hidden relative w-full p-[16px] bg-add rounded-[16px] md:p-[3.2rem]'}>
                  <div className={'block mb-[6.4rem] py-[1.6rem] md:border-b md:border-solid md:border-[#b5b8bc]'}>
                      <div className={'flex flex-col items-start gap-[16px] w-full justify-between md:gap-[1.6rem] md:flex-row md:items-center'}>
                          <div className={'flex items-center shrink-0 gap-[8px] opacity-100'}>
                              <div className={'status-active'}>1</div>
                              <div>Ввод реквизитов</div>
                          </div>
                          <div className={`h-[2px] w-full bg-[#edf4fe] ${status !== 0 ? 'opacity-100' : 'opacity-30'}`}></div>
                          <div className={`flex items-center shrink-0 gap-[8px] ${status !== 0 ? 'opacity-100' : 'opacity-30'}`}>
                              <div className={`${status !== 0 ? 'status-active' : 'status-unactive'}`}>2</div>
                              <div>Оплата заявки</div>
                          </div>
                          <div className={`h-[2px] w-full bg-[#edf4fe] ${status === 2 ? 'opacity-100' : 'opacity-30'}`}></div>
                          <div className={`flex items-center shrink-0 gap-[8px] ${status === 2 ? 'opacity-100' : 'opacity-30'}`}>
                              <div className={`${status === 2 ? 'status-active' : 'status-unactive'}`}>3</div>
                              <div>Завершение</div>
                          </div>
                      </div>
                  </div>
                  <div>
                      { status === 0 &&
                          <div className={'relative'}>
                              <form className={'flex flex-col gap-[6.4rem]'}>
                                  <div className={'gap-[3.2rem] max-w-[40rem] flex flex-col'}>
                                      <h2 className={'text-[22px] font-semibold leading-[normal] md:text-[3.2rem]'}>Введите реквизиты</h2>
                                      <div className={'flex flex-col gap-[1.6rem]'}>
                                          <p className={'my-0'}>Получатель</p>
                                          <div className={'relative'}>
                                              <div className={'relative'}>
                                                  <div className={`rounded-[8px] cursor-text relative ${addressError ? 'border-red-600 border border-solid' : ''}`}>
                                                      <input onInput={handleWalletInput} value={walletValue} ref={addressRef} id={'wallet-input'} placeholder={`Ваш ${toCurrency.name} кошелёк`} className={'h-[5.2rem] px-[2.4rem] bg-main font-normal leading-[1] w-full rounded-[inherit]'}/>
                                                  </div>

                                                  { addressError &&
                                                      <p className={'text-[1.2rem] mx-[2.4rem] mt-[.4rem] text-red-600'}>
                                                          Введите кошелёк {toCurrency.name}
                                                      </p>
                                                  }
                                              </div>
                                          </div>
                                      </div>
                                      <div className={'relative'}>
                                          <div className={`rounded-[8px] cursor-text relative ${emailError ? 'border-red-600 border border-solid' : ''}`}>
                                              <input ref={emailRef} onInput={handleEmailInput} value={emailValue} id={'email-input'} placeholder={'E-mail'} className={'h-[5.2rem] px-[2.4rem] bg-main font-normal leading-[1] w-full rounded-[inherit]'}/>
                                          </div>
                                          { emailError &&
                                              <p className={'text-[1.2rem] mx-[2.4rem] mt-[.4rem] text-red-600'}>
                                                  Введите корректный E-mail
                                              </p>
                                          }
                                      </div>

                                  </div>

                                  <label className={'flex items-center cursor-pointer text-[1.2rem] font-normal leading-[1]'}>
                                      <input type={"checkbox"} className={'hidden'} checked={checked}/>
                                      <span onClick={()=> (setChecked(!checked))} className={'border-solid border-[2px] border-[#edf4fe] items-center rounded-[4px] flex shrink-0 h-[1.8rem] w-[1.8rem] justify-center mr-[1.4rem] relative'}>
                                      <svg className={`bg-transparent block h-[1.4rem] absolute w-[1.4rem] ${checked ? '' : 'hidden'}`}>
                                          <path d="M5.25 9.43251L3.22583 7.40835C3.11676 7.29928 2.96883 7.238 2.81458 7.238C2.66033 7.238 2.5124 7.29928 2.40333 7.40835C2.29426 7.51742 2.23299 7.66535 2.23299 7.8196C2.23299 7.89597 2.24803 7.9716 2.27726 8.04216C2.30649 8.11273 2.34933 8.17684 2.40333 8.23085L4.84167 10.6692C5.06917 10.8967 5.43667 10.8967 5.66417 10.6692L11.8358 4.49751C11.9449 4.38844 12.0062 4.24051 12.0062 4.08626C12.0062 3.93202 11.9449 3.78408 11.8358 3.67501C11.7268 3.56594 11.5788 3.50467 11.4246 3.50467C11.2703 3.50467 11.1224 3.56594 11.0133 3.67501L5.25 9.43251Z" fill={'currentColor'}></path>
                                      </svg>
                                  </span>
                                      <span className={'md:text-[1.2rem]'}>
                                       Я соглашаюсь с <Link to={'/rules'} className={'text-[#4683df] decoration-0'}>правилами</Link> и с <Link to={'/aml-kyc'} className={'text-[#4683df] decoration-0'}>AML/KYC политикой сервиса </Link>
                                  </span>
                                  </label>
                                  <button onClick={handleClickFirst} disabled={!checked} className={`rounded-[8px] text-[1.6rem] h-[5.2rem] px-[2rem] ${checked ? 'btn-active' : 'btn-notActive'}`}>
                                      Начать транзакцию
                                  </button>
                              </form>
                          </div>
                      }
                      { status === 1 &&
                          <div className={'relative'}>
                              <h1 className={'text-[22px] font-semibold md:text-[3.2rem]'}>
                                  Оплатите заявку <span className={'text-[#4683df]'}>№{transactionId}</span>
                              </h1>
                              <div className={'flex flex-col gap-[2rem] mt-[3.2rem]'}>
                                  <div className={'flex flex-col gap-[8px]'}>
                                      <div className={'text-[16px] text-[#b5b8bc]'}>
                                          Кошелёк
                                      </div>
                                      <div className={'flex flex-wrap items-center gap-[1.6rem] leading-[1]'}>
                                          <span className={'text-[22px] break-all'}>
                                              {loading ? 'Loading...' : items[0].address}
                                          </span>
                                          <button onClick={()=>{navigator.clipboard.writeText(items[0].address)}} className={'flex items-center cursor-pointer shrink-0 justify-center relative'}>
                                              <img className={'h-[20px] w-[20px]'} src={copypng} alt={copypng}/>
                                          </button>
                                      </div>
                                  </div>
                                  <div className={'flex flex-col gap-[8px]'}>
                                      <div className={'text-[#b5b8bc] text-[16px]'}>
                                          Сумма к оплате
                                      </div>
                                      <div className={'flex items-center flex-wrap gap-[1.6rem] leading-[1]'}>
                                          <span className={'text-[22px] break-all'}>{fromAmount}</span>
                                          <button onClick={()=>{navigator.clipboard.writeText(fromAmount)}} className={'flex items-center cursor-pointer shrink-0 justify-center relative'}>
                                              <img className={'h-[20px] w-[20px]'} src={copypng} alt={copypng}/>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[2rem] mt-[3.2rem]'}>
                                  <div className={'flex flex-col gap-[1.6rem]'}>
                                      <p className={'my-0'}>
                                          Для быстрого обмена убедитесь, что перевели средства и нажмите кнопку “Я оплатил”. В течение 15 минут после поступления денег на наш счёт, мы обработаем заявку и перечислим средства на ваш реквизит.
                                      </p>
                                      {/*<p>
                                          Средства поступят в течение 24 часов. По всем вопросам обращайтесь в <Link to={'/'} className={'text-[#4683df] cursor-pointer'}>техническую поддержку</Link>
                                      </p>*/}
                                  </div>
                                  <button onClick={handleClickSecond} className={`rounded-[8px] text-[1.6rem] h-[5.2rem] px-[2rem] btn-active`}>
                                      Я оплатил
                                  </button>
                              </div>
                          </div>
                      }
                      { status === 2 &&
                          <div className={'relative'}>
                              <h1 className={'text-[#dfbd46] text-center text-[22px] font-semibold'}>
                                  Заявка №{transactionId} в обработке
                              </h1>
                              <p className={'mt-[3.2rem] text-center mb-0'}>
                                  В данный момент мы проверяем поступление оплаты на наш счёт. После того как оплата будет подтверждена, заявка перейдёт в обработку
                              </p>
                              <div className={'progress-container mt-[3.2rem]'}>
                                  <div className={'progress-bar'}></div>
                              </div>
                              <div className={'text-[#b5b8bc] text-[1.2rem] mx-auto max-w-[50rem] mt-[3.2rem] text-center'}>
                                  Пожалуйста, убедитесь, что вы не только нажали на кнопку “Я оплатил”, но и действительно перевели к нам средства. По всем вопросам в случае задержки обмена, обращайтесь в техническую поддержку. С уважением, администрация сайта.
                              </div>
                          </div>
                      }
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Transaction