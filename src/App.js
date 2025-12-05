import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [value , setValue] = useState([])

  const handleAddTask = (newTask) => {
    console.log(newTask)
    setValue(newTask)
  }
  return (
    <div className="App">
      <AddTask onAddtask={handleAddTask}/>
      <TaskList list={value}/>
    </div>
  );
}

export default App;
