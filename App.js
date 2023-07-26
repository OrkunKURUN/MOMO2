import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      Written by Orkun
      <header>
        <h1>MOMO Car Identifier</h1>
      </header>
      <h2>Enter VIN Number</h2>
      <h2>Upload Photo</h2>
    </div>
  );
}

export default App;
