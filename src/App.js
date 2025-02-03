import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import './index.css';
import Discount from "./pages/Discount";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Transaction from "./pages/Transaction";
import Rules from "./pages/Rules";
import Aml from "./pages/Aml";
import Faq from "./pages/Faq";
import {useState} from "react";
import Burger from "./components/Burger";

function App() {


  return (
      <div className={'flex flex-col bg-main min-h-screen w-screen text-[1.6rem] font-[Roboto] font-normal leading-[120%] text-[#edf4fe] items-center'}>
          <Navbar/>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/discount' element={<Discount/>}/>
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path='/rules' element={<Rules/>}/>
            <Route path='/aml-kyc' element={<Aml/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
          <Footer/>
          <Burger/>
      </div>
  );
}

export default App;