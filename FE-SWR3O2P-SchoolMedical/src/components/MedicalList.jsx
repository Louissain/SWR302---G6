import { Link } from "react-router-dom";
import { useState } from "react";

export default function MedicalList() {
  const [statistics] = useState([
    {
      id: 1,
      title: "Tổng số thuốc",
      count: 150,
      status: "Đang sử dụng",
      source: "Kho nhà trường",
    },
    {
      id: 2,
      title: "Vật tư y tế",
      count: 75,
      status: "Còn trong kho",
      source: "Kho nhà trường",
    },
    {
      id: 3,
      title: "Thuốc sắp hết hạn",
      count: 12,
      status: "Cần xử lý",
      warning: true,
      source: "Kho nhà trường",
    },
    {
      id: 4,
      title: "Vật tư cần nhập thêm",
      count: 8,
      status: "Thiếu",
      warning: true,
      source: "Kho nhà trường",
    },
    {
      id: 5,
      title: "Thuốc hạ sốt Paracetamol",
      count: 5,
      status: "Từ phụ huynh",
      source: "Phụ huynh",
    },
    {
      id: 6,
      title: "Băng gạc y tế",
      count: 10,
      status: "Từ phụ huynh",
      source: "Phụ huynh",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredStatistics = statistics.filter((stat) =>
    stat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Quản lý kho vật tư y tế
      </h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm vật tư..."
          className="w-full max-w-md mx-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStatistics.length > 0 ? (
          filteredStatistics.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 rounded-lg shadow-md ${
                stat.warning ? "bg-red-100" : "bg-white"
              } hover:shadow-lg transition`}
            >
              <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
              {stat.source && (
                <p className="text-sm text-gray-600 mb-1">
                  Nguồn: {stat.source}
                </p>
              )}
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {stat.count}
              </div>
              <p className={`text-sm ${stat.warning ? "text-red-600" : "text-gray-600"}`}>
                {stat.status}
              </p>
              <Link
                to={`/medicine-details/${stat.id}`}
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Chi tiết
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Không tìm thấy vật tư phù hợp
          </p>
        )}
      </div>
    </div>
  );
}