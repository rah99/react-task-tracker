// import React from 'react'
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

// Function based
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Vet Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 12:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 4:30pm',
      reminder: false,
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'There are no tasks to display!'}
    </div>
  );
}

// // Class based - need to "import React from 'react'"
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
