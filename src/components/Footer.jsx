import logo from '../img/logo.svg'
const Footer = () => {
    return(
        <footer className={'py-[48px] font-[Roboto]'}>
            <div className={'px-[16px] flex justify-center'}>
                <div className={'flex flex-col gap-[.8rem] max-w-[39.2rem] items-center justify-center text-center'}>
                    <img src={logo} alt={logo}/>
                    <p className={'font-medium'}>Copyright© 2025</p>
                    <p className={'text-[12px] text-[#b5b8bc]'}> Сайт не предоставляет возможности зачисления иностранной валюты на счета валютных резидентов РФ </p>
                    <p className={'text-[12px] text-[#b5b8bc]'}> Сайт предназначен только для лиц старше 18 лет</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer