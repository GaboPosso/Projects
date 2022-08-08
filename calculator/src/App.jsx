import './App.css';
import freeCodeCampLogo from './images/fcc_primary_large.png';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <div className='freeCodeCamp-logo-container'>
        <img className='freeCodeCamp-logo' 
          src={ freeCodeCampLogo } 
          alt='FreeCodeCamp Logo' />
      </div>
      <div className='calculator-container'>
        <div className='row'></div>
        <Button>1</Button>
        <Button>+</Button>
        <div className='row'></div>
        <Button>+</Button>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
