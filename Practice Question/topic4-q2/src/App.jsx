import StudentList from "./components/StudentList"
import './App.css';

function App() {
  const students = ["Ali", "Sara", "Hassan", "Ayesha"];

  return (
    <div>
      <h2>Student List</h2>
      <StudentList students={students} />
    </div>
  );
}

export default App;