import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setBurger} from "../redux/slices/currencySlice";


const Burger = () => {

    const isBurger = useSelector((state)=> state.currency.burger)

    const dispatch = useDispatch();

  return(
      <div className={`${isBurger ? 'visible' : 'hidden'}`}>
          <div className={'translate-[0] z-50 fixed bg-add border border-solid border-[#edf4fe] flex flex-col h-auto rounded-[16px] overflow-y-scroll p-[1.6rem] right-[1.6rem] top-[7rem] w-[18rem]'}>
              <div className={'flex-[1 0 auto]'}>
                  <ul className={'items-start flex flex-col'}>
                      <li onClick={() => dispatch(setBurger())} className={'list-none py-[1.6rem]'}>
                          <Link to={'/rules'} className={'link'}>
                              Правила
                          </Link>
                      </li>
                      <li onClick={() => dispatch(setBurger())} className={'list-none py-[1.6rem]'}>
                          <Link to={'/aml-kyc'} className={'link'}>
                              AML/KYC
                          </Link>
                      </li>
                      <li onClick={() => dispatch(setBurger())} className={'list-none py-[1.6rem]'}>
                          <Link to={'/faq'} className={'link'}>
                              FAQ
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Burger