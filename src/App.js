import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAddTaskB, setShowTaskB] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'first task1',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'sec task2',
        day: 'Feb 1th at 2:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'sec task3',
        day: 'Jan 1th at 1:30pm',
        reminder: false,
    }
])

//add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}
  setTasks([ ...tasks, newTask])
}

// delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder

const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder} : task
    )
    )
}


  return (
    <div className="container">
      <Header onAdd={() => setShowTaskB(!showAddTaskB)}
      showAdd={showAddTaskB}/>
      {showAddTaskB &&
      <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/> ) : (
        'No task to show'
        )}
    </div>
  );
}

export default App;
