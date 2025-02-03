import logo from "../img/logo.svg"
import {Link} from "react-router-dom";
import burgerpng from '../img/burger.png'
import {useDispatch} from "react-redux";
import {setBurger} from "../redux/slices/currencySlice";

const Navbar = () => {

    const dispatch = useDispatch();


  return(
    <div className={'max-w-[1200px] w-full'}>
        <div className={'md:flex py-[2.6rem] justify-between items-center px-[16px] w-full box-content hidden'}>
            <Link to={'/'} className={''}><img src={logo} alt={logo}/></Link>
            <nav>
                <ul className={'flex items-center md:gap-[16px] lg:gap-[3.2rem]'}>
                    <li className={'list-none'}>
                        <Link to={'/rules'} className={'link'}>
                            Правила
                        </Link>
                    </li>
                    <li className={'list-none'}>
                        <Link to={'/aml-kyc'} className={'link'}>
                            AML/KYC
                        </Link>
                    </li>
                    <li className={'list-none'}>
                        <Link to={'/faq'} className={'link'}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </nav>
            <div></div>
        </div>
        <div className={'md:hidden py-[2.6rem] justify-between items-center px-[16px] box-content flex'}>
            <Link to={'/'} className={''}><img src={logo} alt={logo}/></Link>
            <div onClick={() => dispatch(setBurger())}>
                <img className={'w-[24px] h-[24px]'} src={burgerpng} alt={burgerpng}/>
            </div>
        </div>
    </div>
  );
}
export default Navbar