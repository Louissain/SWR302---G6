// src/components/StudentProfile.jsx
import React, { useState } from "react";

const initialProfile = {
  fullName: "",
  dob: "",
  allergies: "",
  chronicDiseases: "",
  vision: "",
  hearing: "",
  vaccinations: [],
  healthChecks: [],
};

function StudentProfile() {
  const [profile, setProfile] = useState(initialProfile);

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm thêm tiêm chủng mới
  const addVaccination = () => {
    setProfile((prev) => ({
      ...prev,
      vaccinations: [...prev.vaccinations, { vaccine: "", date: "" }],
    }));
  };

  // Hàm thay đổi tiêm chủng
  const handleVaccinationChange = (index, e) => {
    const { name, value } = e.target;
    const newVaccinations = [...profile.vaccinations];
    newVaccinations[index][name] = value;
    setProfile((prev) => ({ ...prev, vaccinations: newVaccinations }));
  };

  // Tương tự với kiểm tra sức khỏe
  const addHealthCheck = () => {
    setProfile((prev) => ({
      ...prev,
      healthChecks: [...prev.healthChecks, { date: "", result: "" }],
    }));
  };

  const handleHealthCheckChange = (index, e) => {
    const { name, value } = e.target;
    const newHealthChecks = [...profile.healthChecks];
    newHealthChecks[index][name] = value;
    setProfile((prev) => ({ ...prev, healthChecks: newHealthChecks }));
  };

  // Hàm submit (ở đây tạm thời chỉ log ra console)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted profile:", profile);
    alert("Lưu hồ sơ thành công!");
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h2>Quản lý hồ sơ sức khỏe học sinh</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Họ và tên:
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Ngày sinh:
          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Dị ứng:
          <textarea
            name="allergies"
            value={profile.allergies}
            onChange={handleChange}
            placeholder="Ví dụ: Phấn hoa, hải sản..."
          />
        </label>
        <br />
        <label>
          Bệnh mãn tính:
          <textarea
            name="chronicDiseases"
            value={profile.chronicDiseases}
            onChange={handleChange}
            placeholder="Ví dụ: Tiểu đường, hen suyễn..."
          />
        </label>
        <br />
        <label>
          Thị lực:
          <input
            type="text"
            name="vision"
            value={profile.vision}
            onChange={handleChange}
            placeholder="Ví dụ: 9/10, cận thị 1.5 độ..."
          />
        </label>
        <br />
        <label>
          Thính lực:
          <input
            type="text"
            name="hearing"
            value={profile.hearing}
            onChange={handleChange}
            placeholder="Bình thường / Giảm..."
          />
        </label>
        <br />
        <hr />

        <h3>Tiêm chủng</h3>
        {profile.vaccinations.map((vac, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <input
              type="text"
              name="vaccine"
              placeholder="Tên vaccine"
              value={vac.vaccine}
              onChange={(e) => handleVaccinationChange(i, e)}
              required
            />
            <input
              type="date"
              name="date"
              value={vac.date}
              onChange={(e) => handleVaccinationChange(i, e)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addVaccination}>
          Thêm tiêm chủng
        </button>

        <hr />
        <h3>Kiểm tra sức khỏe định kỳ</h3>
        {profile.healthChecks.map((check, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <input
              type="date"
              name="date"
              value={check.date}
              onChange={(e) => handleHealthCheckChange(i, e)}
              required
            />
            <input
              type="text"
              name="result"
              placeholder="Kết quả kiểm tra"
              value={check.result}
              onChange={(e) => handleHealthCheckChange(i, e)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addHealthCheck}>
          Thêm kiểm tra sức khỏe
        </button>

        <br />
        <br />
        <button type="submit">Lưu hồ sơ</button>
      </form>
    </div>
  );
}

export default StudentProfile;
