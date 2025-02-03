import cancel from "../svg/cancel.png";
import searchIco from "../svg/search-ico.svg";
import {useState} from "react";



const Overlay = ({handleVisibilityClick, currencyOptions, visible, handleChangeClick, searchValue, handleSearch, filtered}) => {




  return(
      <div id={'overlay'} className={`overflow-y-auto backdrop-blur-[4px] h-screen fixed z-40 bg-[#161821d9] w-screen top-0 left-0 text-[1.6rem] y ${visible ? 'visible' : 'hidden'}`}>
          <div className={'w-[90%] flex justify-center left-[50%] max-w-[59.2rem] absolute top-[50%] -translate-x-1/2 -translate-y-1/2 z-50'}>
              <div className={'flex justify-center w-full'}>
                  <div className={'min-h-[470px] bg-add rounded-[16px] flex flex-col gap-[1.6rem] max-w-[59.2rem] py-[3.9rem] px-[3.2rem] relative w-full'}>
                      <img className={'cursor-pointer absolute right-[1rem] top-[1rem] w-[3.2rem]'} src={cancel} alt={cancel} onClick={()=> handleVisibilityClick()}/>
                      <h3 className={'text-[18px] leading-normal text-[#edf4fe]'}>
                          Выберите валюту
                      </h3>
                      <div className={'flex flex-col relative '}>
                          <div className={'bg-main rounded-[8px] h-[5.2rem] px-[2.4rem] flex items-center'}>
                              <input value={searchValue} onChange={handleSearch} placeholder={'Поиск'} className={'bg-transparent focus:outline-none h-full w-full leading-[1]'}/>
                              <img className={'cursor-pointer h-[3rem] w-[3rem] flex'} src={searchIco} alt={searchIco}/>
                          </div>
                      </div>
                      <div className={'h-[250px] rounded-[8px] pr-[1.6rem] relative'}>
                          <ul className={'bg-main rounded-[8px] h-full overflow-y-scroll w-full'}>
                              {filtered.map((currency)=>(
                                  <li className={'flex items-center bg-main cursor-pointer gap-[1.6rem] justify-between py-[1.2rem] px-[1.6rem]'} onClick={() => {handleVisibilityClick(); handleChangeClick(currency.symbol)}}>
                                      <div className={'items-center flex gap-[.8rem] w-1/2'}>
                                              <span className={'text-[1.6rem] font-normal leading-[120%]'}>
                                                  {currency.name}
                                              </span>
                                      </div>
                                      <img className={'h-[3.6rem] w-[3.6rem]'} src={currency.icon} alt={currency.icon}/>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
};

export default Overlay