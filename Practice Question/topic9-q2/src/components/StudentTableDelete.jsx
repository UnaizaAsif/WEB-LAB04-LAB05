import { useState } from "react";

function StudentTableDelete() {
  const initialStudents = [
    { roll: 1, name: "Ali", math: 85, science: 90 },
    { roll: 2, name: "Sara", math: 78, science: 88 },
    { roll: 3, name: "Ahmed", math: 92, science: 95 },
    { roll: 4, name: "Hina", math: 66, science: 72 },
    { roll: 5, name: "Bilal", math: 80, science: 85 }
  ];

  const [students, setStudents] = useState(initialStudents);

  const handleDelete = (roll) => {
    const updated = students.filter(student => student.roll !== roll);
    setStudents(updated);
  };

  return (
    <div className="table-wrapper">
      <h2>Student Marks Table (With Delete)</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.roll}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.math}</td>
              <td>{student.science}</td>
              <td>{student.math + student.science}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(student.roll)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="6" className="no-data">No students left.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTableDelete;