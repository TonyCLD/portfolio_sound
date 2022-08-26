// import logo from './logo.svg';
import background from './bgimage.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={background} className="Appbackground" alt="background" height="80%" width="80%"/>
        <p>
          Edit <code>src/App.js</code> and save to reload. TLF
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
  );
}

export default App;
