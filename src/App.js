import logo from './logo.svg';
import './App.css';
const singer = {name: 'Dr Mahfuz Rahman', job: 'Singer'}

const singerStyle = {
  color: 'skyblue',
  backgroundColor: 'gray',
  padding : 20 ,
  radius: 20 ,

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude. React. How are you?</h3>
          <p style={singerStyle}>
            Name: {singer.name} <br />
            Job: {singer.job}
          </p>
        </div>
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
    </div>
  );
}

export default App;
