import { Link } from "react-router-dom";



export default function MedicalList() {
const statistics = [
  {
    id: 1,
    title: "Tổng số thuốc",
    count: "150",
    status: "Đang sử dụng",
  },
  {
    id: 2, 
    title: "Vật tư y tế",
    count: "75",
    status: "Còn trong kho",
  },
  {
    id: 3,
    title: "Thuốc sắp hết hạn",
    count: "12",
    status: "Cần xử lý",
  },
  {
    id: 4,
    title: "Vật tư cần nhập thêm",
    count: "8",
    status: "Thiếu",
  }
];






  return (
    <div className="medical-container">
      {statistics.map((stat) => (
        <div key={stat.id} className="stat-card">
          <h3>{stat.title}</h3>
          <div className="stat-number">{stat.count}</div>
          <p className="stat-status">{stat.status}</p>
          <Link to={`/medicine-details/${stat.id}`}>Chi tiết</Link>
        </div>
      ))}
    </div>
  );
}

