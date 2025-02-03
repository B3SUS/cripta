
const Discount = () => {
  return(
      <div className={'py-[48px] md:py-[9.6rem] w-full overflow-hidden text-white'}>
          <div className={'relative px-[16px] mx-auto max-w-[1200px] md:px-[32px] box-content'}>
              <h1 className={'text-[3.2rem] font-semibold leading-normal mb-[2.4rem]'}>Скидки</h1>
              <div className={'py-[32px] px-[16px] md:p-[3.2rem] bg-add rounded-[16px]'}>
                  <div className={'gap-[32px] grid-cols-[1fr] grid md:gap-[1.6em] md:grid-cols-2'}>
                      <div className={'w-full'}>
                          <p>
                              Величина скидки определяется общей суммой операций, совершенных пользователем обменов. После начала работы каждый новый зарегистрированный пользователь получает скидку в 0.08%. В дальнейшем, чем больший объем совершенных Вами операций, тем выгоднее становится скидка.
                          </p>
                      </div>
                      <div className={'bg-main rounded-[16px] p-[3.2rem] w-full text-[#b5b8bc]'}>
                          <div className={'flex border-b pb-[1.5rem] border-solid border-[#edf4fe]'}>
                              <div className={'text-[10px] uppercase w-full md:text-[1.4rem] font-normal'}>Скидка</div>
                              <div className={'text-[10px] uppercase w-full md:text-[1.4rem] font-normal'}>Сумма обменов</div>
                          </div>
                          <div className={'disc-table'}>
                              <div className={'disc-row'}>
                                  <div className={'disc-cell'}>0.05%</div>
                                  <div className={'disc-cell'}>$0 - $500</div>
                              </div>
                              <div className={'disc-row'}>
                                  <div className={'disc-cell'}>0.1%</div>
                                  <div className={'disc-cell'}>$500 - $1000</div>
                              </div>
                              <div className={'disc-row'}>
                                  <div className={'disc-cell'}>0.12%</div>
                                  <div className={'disc-cell'}>$1000 - $2000</div>
                              </div>
                              <div className={'disc-row'}>
                                  <div className={'disc-cell'}>0.14%</div>
                                  <div className={'disc-cell'}>$2000 - $3000</div>
                              </div>
                              <div className={'disc-row'}>
                                  <div className={'disc-cell'}>0.16%</div>
                                  <div className={'disc-cell'}>$3000 - $5000</div>
                              </div>
                              <div className={'disc-row'}>
                                  <div className={'disc-cell'}>0.18%</div>
                                  <div className={'disc-cell'}>$5000 - $10000</div>
                              </div>
                              <div className={'disc-row'}>
                                  <div className={'disc-cell'}>0.2%</div>
                                  <div className={'disc-cell'}>$10000 - $∞</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Discount