function StudentTable() {
  const students = [
    { roll: 1, name: "Ali", math: 85, science: 90 },
    { roll: 2, name: "Sara", math: 78, science: 88 },
    { roll: 3, name: "Ahmed", math: 92, science: 95 },
    { roll: 4, name: "Hina", math: 66, science: 72 },
    { roll: 5, name: "Bilal", math: 80, science: 85 }
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Student Marks Table</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.roll}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.math}</td>
              <td>{student.science}</td>
              <td>{student.math + student.science}</td> {/* Total calculated here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;