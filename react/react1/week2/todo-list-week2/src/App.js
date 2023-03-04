import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Timer/>
      <Header/>
      <ToDoList/>
    </div>
  );
}

export default App;

