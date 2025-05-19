// src/components/HealthCheckManagement.jsx
import React, { useState } from "react";

const initialHealthChecks = [
  // Ví dụ mẫu dữ liệu
  // { id: 1, date: "2024-04-15", result: "Bình thường" }
];

function HealthCheckManagement() {
  const [healthChecks, setHealthChecks] = useState(initialHealthChecks);
  const [newCheck, setNewCheck] = useState({ date: "", result: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCheck((prev) => ({ ...prev, [name]: value }));
  };

  const addHealthCheck = (e) => {
    e.preventDefault();
    if (!newCheck.date || !newCheck.result) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    setHealthChecks((prev) => [...prev, { ...newCheck, id: Date.now() }]);
    setNewCheck({ date: "", result: "" });
  };

  const removeHealthCheck = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá bản ghi này không?")) {
      setHealthChecks((prev) => prev.filter((check) => check.id !== id));
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <h2>Quản lý Kiểm tra sức khỏe định kỳ</h2>
      <form onSubmit={addHealthCheck} style={{ marginBottom: 20 }}>
        <input
          type="date"
          name="date"
          value={newCheck.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="result"
          placeholder="Kết quả kiểm tra"
          value={newCheck.result}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Thêm</button>
      </form>

      {healthChecks.length === 0 ? (
        <p>Chưa có dữ liệu kiểm tra sức khỏe.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th>Ngày kiểm tra</th>
              <th>Kết quả</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {healthChecks.map((check) => (
              <tr key={check.id}>
                <td>{check.date}</td>
                <td>{check.result}</td>
                <td>
                  <button onClick={() => removeHealthCheck(check.id)}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HealthCheckManagement;
