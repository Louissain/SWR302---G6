import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MedicineDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [medicineDetails, setMedicineDetails] = useState(null);

  // Mock data - In a real application, this would come from an API
  const medicineData = {
    1: {
      name: "Tổng số thuốc",
      quantity: 150,
      status: "Đang sử dụng",
      source: "Kho nhà trường",
      details: [
        { name: "Paracetamol 500mg", quantity: 50, expiryDate: "2024-12-31" },
        { name: "Amoxicillin 250mg", quantity: 30, expiryDate: "2024-10-31" },
        { name: "Vitamin C", quantity: 70, expiryDate: "2024-09-30" }
      ]
    },
    2: {
      name: "Vật tư y tế",
      quantity: 75,
      status: "Còn trong kho",
      source: "Kho nhà trường",
      details: [
        { name: "Băng gạc", quantity: 30, expiryDate: "2025-12-31" },
        { name: "Bông y tế", quantity: 25, expiryDate: "2025-12-31" },
        { name: "Găng tay y tế", quantity: 20, expiryDate: "2025-12-31" }
      ]
    },
    3: {
      name: "Thuốc sắp hết hạn",
      quantity: 12,
      status: "Cần xử lý",
      source: "Kho nhà trường",
      warning: true,
      details: [
        { name: "Vitamin B1", quantity: 5, expiryDate: "2024-03-31" },
        { name: "Vitamin B6", quantity: 7, expiryDate: "2024-04-30" }
      ]
    },
    4: {
      name: "Vật tư cần nhập thêm",
      quantity: 8,
      status: "Thiếu",
      source: "Kho nhà trường",
      warning: true,
      details: [
        { name: "Khẩu trang y tế", quantity: 0, expiryDate: "N/A" },
        { name: "Nước muối sinh lý", quantity: 0, expiryDate: "N/A" }
      ]
    },
    5: {
      name: "Thuốc hạ sốt Paracetamol",
      quantity: 5,
      status: "Từ phụ huynh",
      source: "Phụ huynh",
      details: [
        { name: "Paracetamol 500mg", quantity: 5, expiryDate: "2024-08-31" }
      ]
    },
    6: {
      name: "Băng gạc y tế",
      quantity: 10,
      status: "Từ phụ huynh",
      source: "Phụ huynh",
      details: [
        { name: "Băng gạc vô trùng", quantity: 10, expiryDate: "2025-06-30" }
      ]
    }
  };

  useEffect(() => {
    const details = medicineData[id];
    if (details) {
      setMedicineDetails(details);
    }
  }, [id]);

  if (!medicineDetails) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="text-center">
          <p className="text-xl text-gray-600">Không tìm thấy thông tin vật tư</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{medicineDetails.name}</h1>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Quay lại
            </button>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Trạng thái:</p>
                <p className={`font-semibold ${medicineDetails.warning ? 'text-red-600' : 'text-green-600'}`}>
                  {medicineDetails.status}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Nguồn:</p>
                <p className="font-semibold">{medicineDetails.source}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Chi tiết vật tư</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Tên vật tư</th>
                    <th className="px-4 py-2 text-left">Số lượng</th>
                    <th className="px-4 py-2 text-left">Hạn sử dụng</th>
                  </tr>
                </thead>
                <tbody>
                  {medicineDetails.details.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">
                        {item.quantity > 0 ? (
                          <span className="text-green-600">{item.quantity}</span>
                        ) : (
                          <span className="text-red-600">Đã hết</span>
                        )}
                      </td>
                      <td className="px-4 py-2">{item.expiryDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 