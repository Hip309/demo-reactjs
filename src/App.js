import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Stella';
  const age = 25;
  const isFemale = true;
  const student ={
    name: 'Front-end'
  };
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello {isFemale ? 'Ms.' : 'Mr.'} {name} - {age} years old!
        </p>
      </header>
    </div>
  );
}

export default App;
