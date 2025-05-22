// src/components/student/StudentList.jsx
import React from "react";

function StudentList({ students, onSelectStudent }) {
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Danh sách học sinh</h2>
      {students.length === 0 ? (
        <p>Không có học sinh.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {students.map((student) => (
            <li
              key={student.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => onSelectStudent(student)}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") onSelectStudent(student);
              }}
            >
              {student.fullName} - {student.className || "Lớp chưa cập nhật"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
