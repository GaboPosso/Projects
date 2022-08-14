import './App.css';
import Logo from './components/Logo';
import Button from './components/button';
import Input from './components/input';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculate = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Insert values to operate.")
    }
  }

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-container'>
        <Logo />
      </div>
      <div className='calculator-container'>
        <Input input={ input } />
        <div className='row'>
          <Button setClick = { addInput }>1</Button>
          <Button setClick = { addInput }>2</Button>
          <Button setClick = { addInput }>3</Button>
          <Button setClick = { addInput }>+</Button>
        </div>          
        <div className='row'>
          <Button setClick = { addInput }>4</Button>
          <Button setClick = { addInput }>5</Button>
          <Button setClick = { addInput }>6</Button>
          <Button setClick = { addInput }>-</Button>
        </div>         
        <div className='row'>
          <Button setClick = { addInput }>7</Button>
          <Button setClick = { addInput }>8</Button>
          <Button setClick = { addInput }>9</Button>
          <Button setClick = { addInput }>*</Button>
        </div>
        <div className='row'>
          <Button setClick = { calculate }>=</Button>
          <Button setClick = { addInput }>0</Button>
          <Button setClick = { addInput }>.</Button>
          <Button setClick = { addInput }>/</Button>
        </div>
        <div className='row'>
          <ClearButton setClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
