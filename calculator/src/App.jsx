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
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>          
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>         
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
