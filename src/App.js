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
      <Person name = "Rubel"></Person>
      <Person name = "Shukkur"></Person>
      <Person></Person>
      <Person></Person>
      <h1>Some Info About friends</h1>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person(props){
  return(
    <div className='person'>
      <h1> {props.name}</h1>
      <p>Profession : Software Engineer</p>
    </div>
  )
} 
function Friend(){
  return(
    <div className='friend'>
       <h1>Sami Assad</h1>
       <p>Profession: Engineer</p>
    </div>
  )
}

export default App;
