import logo from './logo.svg';
import './App.css';

function Submit() {
  return (
    <button>SUBMIT</button>
  );
}
function SelectFile() {
  return (
    <button>SELECT A PHOTO</button>
  );
}
function InputVIN() {
  return(
    <input type="text" placeholder="VIN NUMBER"></input>
    );
}

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
      <div>
        <h2>Enter VIN Number</h2>
        <InputVIN />
      </div>
      <div>
        <h2>Upload Photo</h2>
        <SelectFile />
      </div>
      <Submit />
    </div>
  );
}

export default App;
