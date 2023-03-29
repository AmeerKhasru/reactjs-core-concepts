import logo from './logo.svg';
import './App.css';
const singer = {name: 'Dr Mahfuz Rahman', job: 'Singer'}

const singerStyle = {
  color: 'skyblue',
  backgroundColor: 'gray',
  padding : 20 ,

}
function App() {
  return (
    <div className="App">
      <Person name = "Rubel" job ="Cricketer"></Person>
      <Person name = "Buchuk" job ="Hadudu Player"></Person>
      <Person></Person>
      <Person></Person>
      <h1>Some Info About friends</h1>
      <Friend name = "Sami Assad"></Friend>
      <Friend name = "Farhad"></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person(props){
  return(
    <div className='person'>
      <h1> {props.name}</h1>
      <p>Profession :{ props.job}</p>
    </div>
  )
} 
function Friend(props1){
  return(
    <div className='friend'>
       <h1>{props1.name}</h1>
       <p>Profession: Engineer</p>
    </div>
  )
}

export default App;
