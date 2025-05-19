// src/components/student/StudentHealthRecord.jsx
import React from "react";

function StudentHealthRecord({ student }) {
  if (!student) {
    return (
      <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
        <p>Vui lòng chọn học sinh để xem hồ sơ sức khỏe.</p>
      </div>
    );
  }

  const {
    fullName,
    dob,
    allergies,
    chronicDiseases,
    vision,
    hearing,
    vaccinations = [],
    healthChecks = [],
  } = student;

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <h2>Hồ sơ sức khỏe của {fullName}</h2>
      <p>
        <strong>Ngày sinh:</strong> {dob || "Chưa cập nhật"}
      </p>
      <p>
        <strong>Dị ứng:</strong> {allergies || "Không có"}
      </p>
      <p>
        <strong>Bệnh mãn tính:</strong> {chronicDiseases || "Không có"}
      </p>
      <p>
        <strong>Thị lực:</strong> {vision || "Chưa cập nhật"}
      </p>
      <p>
        <strong>Thính lực:</strong> {hearing || "Chưa cập nhật"}
      </p>

      <hr />
      <h3>Tiêm chủng</h3>
      {vaccinations.length === 0 ? (
        <p>Chưa có dữ liệu tiêm chủng.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th>Tên vaccine</th>
              <th>Ngày tiêm</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {vaccinations.map((vac, idx) => (
              <tr key={idx}>
                <td>{vac.vaccineName || vac.vaccine || "Chưa cập nhật"}</td>
                <td>{vac.date || "Chưa cập nhật"}</td>
                <td>{vac.status || "Chưa cập nhật"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <hr />
      <h3>Kiểm tra sức khỏe định kỳ</h3>
      {healthChecks.length === 0 ? (
        <p>Chưa có dữ liệu kiểm tra sức khỏe.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th>Ngày kiểm tra</th>
              <th>Kết quả</th>
            </tr>
          </thead>
          <tbody>
            {healthChecks.map((check, idx) => (
              <tr key={idx}>
                <td>{check.date || "Chưa cập nhật"}</td>
                <td>{check.result || "Chưa cập nhật"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentHealthRecord;
