import { useState } from 'react';

function StudentTable() {
  // State for filter and sort
  const [subject, setSubject] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');

  // Static data
  const students = [
    { id: 1, name: "Ali", math: 80, science: 70 },
    { id: 2, name: "Sara", math: 90, science: 85 },
    { id: 3, name: "Ahmed", math: 60, science: 75 },
    { id: 4, name: "Zara", math: 85, science: 95 }
  ];

  // Step 1: Filter
  let filtered = students;

  if (subject === 'math') {
    filtered = students.map(s => ({
      ...s,
      total: s.math
    }));
  } else if (subject === 'science') {
    filtered = students.map(s => ({
      ...s,
      total: s.science
    }));
  } else {
    filtered = students.map(s => ({
      ...s,
      total: s.math + s.science
    }));
  }

  // Step 2: Sort
  if (sortOrder === 'asc') {
    filtered.sort((a, b) => a.total - b.total);
  } else if (sortOrder === 'desc') {
    filtered.sort((a, b) => b.total - a.total);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Student Marks Table</h2>

      {/* Filter */}
      <select onChange={(e) => setSubject(e.target.value)}>
        <option value="all">All Subjects</option>
        <option value="math">Math Only</option>
        <option value="science">Science Only</option>
      </select>

      {/* Sort */}
      <button onClick={() => setSortOrder('asc')}>Sort Asc</button>
      <button onClick={() => setSortOrder('desc')}>Sort Desc</button>

      <br /><br />

      {/* Table */}
      <table border="1" style={{ margin: "auto", width: "60%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.math}</td>
              <td>{student.science}</td>
              <td>{student.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;