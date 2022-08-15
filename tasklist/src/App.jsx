import './App.css';
import freeCodeCampLogo from './img/fcc_primary_large.png';

function App() {
  return (
    <div className='taskApp'>
      <div className='logo-Container'>
        <img className='freeCodeCamp-logo' 
        src={ freeCodeCampLogo } 
        alt='logo' />
      </div>
      <div className='mainTaskApp'>
        <h1>Mis tareas</h1>
      </div>
    </div>
  );
}

export default App;
