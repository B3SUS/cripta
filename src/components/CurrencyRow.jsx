export const CurrencyRow = ({
                                valueAmount,
                                inputChange,
                                selectValue,
                                selectChange,
                                currencyOptions
                     }) => {



    return(
      <div className={'bg-main rounded-[10px] h-[50px] w-[300px] text-black'}>
          <input type="number" min={0} value={valueAmount} onChange={inputChange} />
          <select value={selectValue?.symbol} onChange={selectChange}>
              {currencyOptions.map((currency)=>(
                  <option key={currency.id} value={currency.symbol}>
                      {currency.symbol} - {currency.name}
                  </option>
              ))}
          </select>
      </div>
    )
};
