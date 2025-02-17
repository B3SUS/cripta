import Navbar from "../components/Navbar";
import Exchange from "../components/Exchange";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MainPage = () => {




    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };


        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  return(
    <div className={'flex flex-col bg-main min-h-screen w-screen text-[1.6rem] font-normal leading-[120%] text-[#edf4fe] items-center'}>
        <div className={'flex flex-col items-center box-content gap-[32px] py-[48px] px-[16px] max-w-[1200px] md:py-[9.6rem] md:px-[32px] md:mx-auto lg:gap-0'}>
            <div className={'flex flex-col gap-[32px] justify-between items-center relative w-full lg:flex-row lg:items-start lg:gap-0'}>
                <div className={'flex flex-col items-center justify-center text-center text-white gap-[1.6rem] w-full md:max-w-[960px] lg:max-w-[57rem] lg:items-start lg:text-left'}>
                    <div className={'flex items-center border border-transparent rounded-[16px] bg-add gap-[1.6rem] py-[1.2rem] px-[1.6rem] w-fit'}>
                        <div className={'animate-pulse bg-[#88df72] w-[1.4rem] h-[1rem] rounded-[4px]'}></div>
                        <span className={'text-[12px] md:text-[1.6rem]'}>Работаем 24/7</span>
                    </div>
                    <h1 className={'text-[22px] md:text-[4.8rem] leading-[normal] font-bold'}>Надёжный сервис,<br/>проверенный годами!</h1>
                    <h3 className={'text-[16px] md:text-[22px] leading-normal font-medium md:font-normal'}>Присоединяйтесь к тысячам пользователей, уже{(screenWidth>1024) ? '' : <br/>} опробовавшим наш сайт</h3>
                </div>
                <Exchange/>
            </div>

            <Advantages/>
        </div>
    </div>
  );
}
export default MainPage