import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import './index.css';

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
  );
}

export default App;