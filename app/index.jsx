import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}
