import { Route, Routes } from "react-router-dom";

//CSS
import './App.css';

//COMPONENTS
import Main from './components/Main';
import Tiboulb from './components/Tiboulb';
import TibouPerfume from './components/TibouPerfume';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/tiboulb' element={<Tiboulb />} />
        <Route path='/tibouperfume' element={<TibouPerfume />} />
      </Routes>
    </div>
  );
}

export default App;