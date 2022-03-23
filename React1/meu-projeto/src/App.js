import './App.css';
import RenderList from './components/RenderList';


function App(){

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">   
      <h1>Renderização de Listas</h1>
      <RenderList itens={meusItens}/>
      <RenderList itens={[]}/>
    </div>
  );
}

export default App;
