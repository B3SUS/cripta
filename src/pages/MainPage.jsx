import Navbar from "../components/Navbar";
import Exchange from "../components/Exchange";
import Advantages from "../components/Advantages";

const MainPage = () => {
  return(
    <div className={'flex flex-col bg-main min-h-screen w-screen text-[1.6rem] font-[Roboto] font-normal leading-[120%] text-[#edf4fe]'}>
        <Navbar/>
        <div className={'flex flex-col gap-[32px] py-[48px] px-[16px] max-w-[1200px]'}>
            <div className={'flex flex-col items-center justify-center text-center text-white gap-[1.6rem]'}>
                <div className={'flex items-center border border-transparent rounded-[16px] bg-add gap-[1.6rem] py-[1.2rem] px-[1.6rem] w-fit'}>
                    <div className={'animate-pulse bg-[#88df72] w-[1.4rem] h-[1rem] rounded-[4px]'}></div>
                    <span className={'text-[12px]'}>Работаем 24/7</span>
                </div>
                <h1 className={'text-[22px] leading-normal font-bold'}>Надёжный сервис,<br/>проверенный годами!</h1>
                <h3 className={'text-[16px] font-medium'}>Присоединяйтесь к тысячам пользователей, уже<br/>опробовавшим наш сайт</h3>
            </div>
            <Exchange/>
            <Advantages/>
        </div>
    </div>
  );
}
export default MainPage