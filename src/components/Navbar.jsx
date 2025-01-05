import logo from "../img/logo.svg"
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <div className={'flex py-[2.6rem] justify-between items-center px-[16px]'}>
        <Link to={'/'} className={''}><img src={logo} alt={logo}/></Link>
        <div className={'text-white'}></div>
    </div>
  );
}
export default Navbar