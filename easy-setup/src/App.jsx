import './App.css';
import React,{useState} from 'react';

//Import components


function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  
  
  const incrementer = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  const toggleElement  = () => {
    setToggle((prev) => !prev)
  };
 
  return (
    <div className="App">
      <div className="home">
        <h1 className={toggle ? 'active' : ''}>Hello React  </h1>
        <button onClick={incrementer}>Click</button>
        <button onClick={toggleElement}>Toogle</button>
        <h2>Counter {counter} </h2>
        
      </div>
    </div>
  );
}

export default App;
