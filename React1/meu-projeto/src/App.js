import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App(){

  const nome = 'Agda'

  return (
    <div className="App">   
      <HelloWord/>
      <Frase/>
      <Frase/>
      <SayMyName nome="Amilcar"/>
      <SayMyName nome="Kevin"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Amilcar" 
      idade="21"
      profissao="Programador"
      foto="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;
