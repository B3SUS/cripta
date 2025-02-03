import {useState} from "react";
const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return(
        <main className={'pt-[48px]'}>
            <div className={'relative px-[16px] mx-auto max-w-[1200px]'}>
                <h1 className={'text-[3.2rem] font-semibold mb-[2.4rem]'}>
                    Помощь
                </h1>
                <div className={'py-[32px] px-[16px] bg-add rounded-[16px] md:p-[3.2rem]'}>
                    <div className={'flex flex-col gap-[2.4rem]'}>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(1)} className={`trigger ${activeIndex === 1 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Как совершить обмен на вашем сайте?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 1 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 1 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        1. На главной странице сайта, Вам необходимо выбрать валюту “ОТДАЮ” и валюту “ПОЛУЧАЮ”, ввести сумму в калькулятор и система посчитает сумму, которую вы получите.
                                    </p>
                                    <p>
                                        2. После чего в поле “ВВОД ДАННЫХ” введите необходимые данные для обмена. В этом же столбце Вы можете посмотреть курс обмена. В него уже включена комиссия нашего сервиса. Нажмите кнопку “ПЕРЕЙТИ К ОПЛАТЕ”.                                    </p>
                                    <p>
                                        3. На следующей странице необходимо ознакомиться с информацией вверху страницы, далее скопировать реквизиты сайта, совершить оплату и нажать кнопку “Я ОПЛАТИЛ”.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(2)} className={`trigger ${activeIndex === 2 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Сколько длится обмен?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 2 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 2 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        Мы отправляем средства в течении 1-10 минут после получения от Вас оплаты
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(3)} className={`trigger ${activeIndex === 3 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Я совершил оплату, а страница с кнопкой “Я оплатил” пропала, что делать?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 3 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 3 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        Если по какой-либо причине Вы не смогли нажать кнопку “Я оплатил”, напишите нам в Telegram
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(4)} className={`trigger ${activeIndex === 4 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Я указал неверные реквизиты и средства не пришли, что делать?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 4 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 4 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        К сожалению, мы не сможем вернуть ваши средства. Все что мы можем сделать, это отправить вам реквизиты, куда средства ушли. Будьте внимательны при вводе данных!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(5)} className={`trigger ${activeIndex === 5 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Могу ли я отказаться от обмена, если уже оплатил заявку?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 5 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 5 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        Если Ваша заявка не выполнена и средства не были отправлены, Ваша заявка может быть отменена и средства возвращены Вам с вычетом комиссии внутри платежной системы. В случае, если заявка была выполнена, отмена обмена невозможна.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(6)} className={`trigger ${activeIndex === 6 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Я купил Биткоин, средства мне не пришли, а заявка имеет статус “Обработана”, что делать?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 6 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 6 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        Для того, чтобы средства поступили на кошелек, требуется в среднем от 3 до 6 подтверждений сети Биткоин. Скорость подтверждения зависит от загруженности сети Биткоин, чем больше неподтвержденных транзакций, тем дольше будет подтверждаться транзакция. Загруженность сети вы всегда можете отследить здесь.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(7)} className={`trigger ${activeIndex === 7 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Я перевел Биткоин, но не получил выплату, в чем дело?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 7 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 7 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        Операции по обмену Биткоина проводятся только после получения 1 подтверждения от сети Bitcoin.<br/>
                                        Бывают случаи, когда ваша заявка удаляется, это происходит если:
                                    </p>
                                    <p>
                                        1. Оплата по заявке не поступала в течении 1 часа с момента создания.
                                    </p>
                                    <p>
                                        2. Была переведена сумма, которая не соответствует указанной вами сумме в заявке. Если заявка была удалена, обратитесь в Telegram
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(8)} className={`trigger ${activeIndex === 8 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    В какое время вы работаете?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 8 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 8 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        Наш сервис функционирует 24 часа в сутки, 7 дней в неделю без перерывов.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`accordion`}>
                            <div onClick={()=> toggleActive(9)} className={`trigger ${activeIndex === 9 ? 'pb-[2.4rem]' : 'pb-0'}`}>
                                <div className={`trigger-h3`}>
                                    Какая у вас комиссия?
                                </div>
                                <div className={'dropdown-trigger'}>
                                    <div className={`dropdown-trigger-add transition-[0.3s] ${activeIndex === 9 ? 'rotate-180 bg-[#4d90f5]' : ' bg-add'}`}>
                                        <svg className={`dropdown-trigger-add-svg`} viewBox={'0 0 18 10'}>
                                            <path d="M9.00001 9.65C8.60001 9.65 8.20001 9.45 8.00001 9.25L1.40001 2.65C0.800012 2.05 0.800012 1.05 1.40001 0.45C2.00001 -0.15 3.00001 -0.15 3.60001 0.45L9.00001 5.85L14.4 0.45C15 -0.15 16 -0.15 16.6 0.45C17.2 1.05 17.2 2.05 16.6 2.65L10.2 9.05C9.80001 9.45 9.40001 9.65 9.00001 9.65Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={`transition-height ${activeIndex === 9 ? 'open' : 'dropdown-content'}`}>
                                <div className={`dropdown-content-add`}>
                                    <p>
                                        Комиссии нашего сервиса уже включены в курс обмена и отображаются на стадии оформления заявки.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
export default Faq