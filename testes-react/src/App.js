import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const toDo = ['Tomar café da manhã', 'Limpar a sujeira da cachorra', 'Lavar o Banheiro', 'Varrer e passar pano na casa', 'Estudar de 10h as 22h de segunda a sexta', 'Fazer tudo igual no sábado, mas estudando só até 18h']

function App() {
  return (
    <div className="App">
      {task('Testando')}
      {toDo.map((task) => <li>{task}</li>)}
    </div>
  );
}

export default App;
