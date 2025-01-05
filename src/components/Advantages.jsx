import fast from '../svg/fast.png'
import safe from '../svg/safe.png'
import support from '../svg/support.png'
import wallet from '../svg/wallet.png'

const Advantages = () => {
  return(
    <div className={'mt-[4.8rem] relative font-[Roboto] text-[#edf4fe]'}>
        <div className={'flex items-center justify-center'}>
            <h2 className={'text-[22px] font-semibold'}>
                Почему выбирают нас?
            </h2>
        </div>
        <div className={'flex flex-col gap-[2.4rem] mt-[3.2rem]'}>
            <div className={'adv-wrapper'}>
                <div className={'adv-img-wrapper'}>
                    <img className={'adv-img'} src={fast} alt={fast}/>
                </div>
                <h3 className={'adv-text'}>Быстро</h3>
                <p className={'adv-p'}>
                    Время – деньги, и мы это понимаем. Наши операции проводятся моментально, обеспечивая вам мгновенный доступ к желаемым средствам.
                </p>
            </div>
            <div className={'adv-wrapper'}>
                <div className={'adv-img-wrapper'}>
                    <img className={'adv-img'} src={safe} alt={safe}/>
                </div>
                <h3 className={'adv-text'}>Надёжно</h3>
                <p className={'adv-p'}>Мы сотрудничаем только с самыми надежными фиатными провайдерами, чтобы обеспечить лучший сервис на рынке</p>
            </div>
            <div className={'adv-wrapper'}>
                <div className={'adv-img-wrapper'}>
                    <img className={'adv-img'} src={support} alt={support}/>
                </div>
                <h3 className={'adv-text'}>Поддержка 24/7</h3>
                <p className={'adv-p'}>Наши опытные специалисты службы поддержки всегда готовы помочь вам с любыми возникающими вопросами</p>
            </div>
            <div className={'adv-wrapper'}>
                <div className={'adv-img-wrapper'}>
                    <img className={'adv-img'} src={wallet} alt={wallet}/>
                </div>
                <h3 className={'adv-text'}>Выгодный курс</h3>
                <p className={'adv-p'}>Мы гарантируем прозрачность и честность в каждой сделке</p>
            </div>
        </div>
    </div>
  )
};

export default Advantages