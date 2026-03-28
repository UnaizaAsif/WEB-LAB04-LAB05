import { useState } from 'react';

function Todo() {
  // State for input text
  const [task, setTask] = useState('');

  // State for list of todos
  const [todos, setTodos] = useState([]);

  // Add task
  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTask]);
    setTask(''); // clear input
  };

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle done
  const toggleDone = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo App</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {/* List */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: "10px" }}>
            
            {/* Task Text */}
            <span
              onClick={() => toggleDone(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {todo.text}
            </span>

            {/* Delete Button */}
            <button onClick={() => deleteTask(todo.id)}>
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;