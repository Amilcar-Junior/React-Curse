import './App.css';
import HelloWord from './components/HelloWord';

function App() {


  const name = 'Amilcar'

  const newName = name.toUpperCase()

  function sum(a,b){
    return a+b
  }


  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Ola, {newName}</p>
      <p>Soma: {sum(3,2)}</p>
      <img src={url} alt="minha imgem"/>
      <HelloWord/>
    </div>
  );
}

export default App;
