import './App.css';
import FreeCodeCampLogo from'./images/fcc_primary_large.png'
import Button from './components/Button';
import Counter from './components/count';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCount = () => {
    setNumClicks(0);
  }
  
  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-container'>
        <img className='freeCodeCamp-logo' 
        src={FreeCodeCampLogo} 
        alt='FreeCodeCamp Logo' />
      </div>
      <div className='clickCounter-Container'>
        <Counter numClicks={ numClicks } />
        <Button 
          text= 'Click'
          isClickable={ true }
          manageClick={ manageClick } />
        <Button 
          text='Restart'
          isClickable={ false }
          manageClick={ restartCount }/>
      </div>
      
    </div>
  );
}

export default App;
