import './App.css';

//IMPORT IMAGES
import tibouPerfume from './image/logo3.png';
import tiboulb from './image/logo33-100.png'
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='tiboulb'>
          <img src={tiboulb} alt="tibou.lb" />
        </div>

        <div className='tibouperfume'>
          <img src={tibouPerfume} alt="tibou perfume" />
        </div>
      </div>
    </div>
  );
}

export default App;