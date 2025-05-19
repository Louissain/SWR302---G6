// src/components/VaccinationManagement.jsx
import React, { useState } from "react";

const initialVaccinations = [
  // Mẫu dữ liệu khởi tạo (nếu có)
  // { id: 1, vaccineName: "Viêm gan B", date: "2024-01-10", status: "Đã tiêm" }
];

function VaccinationManagement() {
  const [vaccinations, setVaccinations] = useState(initialVaccinations);
  const [newVaccine, setNewVaccine] = useState({
    vaccineName: "",
    date: "",
    status: "Chưa tiêm",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVaccine((prev) => ({ ...prev, [name]: value }));
  };

  const addVaccination = (e) => {
    e.preventDefault();
    if (!newVaccine.vaccineName || !newVaccine.date) {
      alert("Vui lòng nhập tên vaccine và ngày tiêm.");
      return;
    }
    setVaccinations((prev) => [
      ...prev,
      { ...newVaccine, id: Date.now() },
    ]);
    setNewVaccine({ vaccineName: "", date: "", status: "Chưa tiêm" });
  };

  const toggleStatus = (id) => {
    setVaccinations((prev) =>
      prev.map((vac) =>
        vac.id === id
          ? { ...vac, status: vac.status === "Đã tiêm" ? "Chưa tiêm" : "Đã tiêm" }
          : vac
      )
    );
  };

  const removeVaccination = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá bản ghi này không?")) {
      setVaccinations((prev) => prev.filter((vac) => vac.id !== id));
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <h2>Quản lý Tiêm chủng</h2>
      <form onSubmit={addVaccination} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="vaccineName"
          placeholder="Tên vaccine"
          value={newVaccine.vaccineName}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newVaccine.date}
          onChange={handleInputChange}
          required
        />
        <select
          name="status"
          value={newVaccine.status}
          onChange={handleInputChange}
        >
          <option value="Chưa tiêm">Chưa tiêm</option>
          <option value="Đã tiêm">Đã tiêm</option>
        </select>
        <button type="submit">Thêm</button>
      </form>

      {vaccinations.length === 0 ? (
        <p>Chưa có dữ liệu tiêm chủng.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th>Tên vaccine</th>
              <th>Ngày tiêm</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {vaccinations.map((vac) => (
              <tr key={vac.id}>
                <td>{vac.vaccineName}</td>
                <td>{vac.date}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: vac.status === "Đã tiêm" ? "green" : "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleStatus(vac.id)}
                    title="Nhấn để thay đổi trạng thái"
                  >
                    {vac.status}
                  </button>
                </td>
                <td>
                  <button onClick={() => removeVaccination(vac.id)}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default VaccinationManagement;
