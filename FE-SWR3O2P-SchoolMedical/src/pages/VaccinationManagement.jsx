// src/pages/VaccinationManagement.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Giả lập dữ liệu ban đầu
const initialVaccinations = [
  { id: 1, vaccineName: "BCG (Lao)", date: "2023-10-15", status: "Đã tiêm", note: "Tiêm nhắc lại sau 5 năm" },
  { id: 2, vaccineName: "Viêm gan B", date: "2023-11-20", status: "Đã tiêm", note: "Mũi 1/3" },
  { id: 3, vaccineName: "DPT-VGB-Hib", date: "2023-12-25", status: "Chưa tiêm", note: "Lịch nhắc: 25/12/2023" },
];

function VaccinationManagement() {
  const [vaccinations, setVaccinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newVaccine, setNewVaccine] = useState({
    vaccineName: "",
    date: "",
    status: "Chưa tiêm",
    note: ""
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Giả lập việc tải dữ liệu
  useEffect(() => {
    const timer = setTimeout(() => {
      setVaccinations(initialVaccinations);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVaccine((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setNewVaccine({
      vaccineName: "",
      date: "",
      status: "Chưa tiêm",
      note: ""
    });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newVaccine.vaccineName || !newVaccine.date) {
      alert("Vui lòng nhập tên vaccine và ngày tiêm.");
      return;
    }
    
    if (editingId) {
      // Cập nhật
      setVaccinations(vaccinations.map(vac => 
        vac.id === editingId ? { ...newVaccine, id: editingId } : vac
      ));
    } else {
      // Thêm mới
      setVaccinations([
        ...vaccinations,
        { ...newVaccine, id: Date.now() },
      ]);
    }
    
    resetForm();
    setShowForm(false);
  };

  const handleEdit = (vaccine) => {
    setNewVaccine(vaccine);
    setEditingId(vaccine.id);
    setShowForm(true);
    
    // Cuộn lên form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
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

  // Lọc dữ liệu theo từ khóa tìm kiếm
  const filteredVaccinations = vaccinations.filter(vac => 
    vac.vaccineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vac.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Quản lý Tiêm chủng</h1>
        <p className="text-gray-600 dark:text-gray-400">Theo dõi lịch tiêm chủng và cập nhật trạng thái tiêm chủng cho học sinh</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Thống kê */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-2/3">
          <div className="card bg-primary/10 border-l-4 border-primary flex items-center p-4">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tổng số mũi tiêm</div>
              <div className="text-2xl font-bold text-primary">{vaccinations.length}</div>
            </div>
          </div>
          
          <div className="card bg-green-500/10 border-l-4 border-green-500 flex items-center p-4">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-500/20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Đã tiêm</div>
              <div className="text-2xl font-bold text-green-600">{vaccinations.filter(v => v.status === "Đã tiêm").length}</div>
            </div>
          </div>
          
          <div className="card bg-red-500/10 border-l-4 border-red-500 flex items-center p-4">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-red-500/20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Chưa tiêm</div>
              <div className="text-2xl font-bold text-red-600">{vaccinations.filter(v => v.status === "Chưa tiêm").length}</div>
            </div>
          </div>
        </div>

        {/* Các nút action */}
        <div className="flex flex-col lg:w-1/3 justify-center space-y-3">
          <button 
            onClick={() => { resetForm(); setShowForm(!showForm); }}
            className="btn-primary flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            {editingId ? 'Thêm mũi tiêm mới' : showForm ? 'Ẩn biểu mẫu' : 'Thêm mũi tiêm mới'}
          </button>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Form nhập liệu */}
      <motion.div 
        className="card mb-8"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showForm ? 1 : 0, height: showForm ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: showForm ? 'block' : 'none' }}
      >
        <h2 className="text-xl font-bold mb-4">{editingId ? 'Cập nhật thông tin tiêm chủng' : 'Thêm mũi tiêm mới'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="vaccineName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tên vaccine <span className="text-red-500">*</span>
              </label>
              <input
                id="vaccineName"
                type="text"
                name="vaccineName"
                placeholder="Nhập tên vaccine"
                value={newVaccine.vaccineName}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ngày tiêm <span className="text-red-500">*</span>
              </label>
              <input
                id="date"
                type="date"
                name="date"
                value={newVaccine.date}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Trạng thái
              </label>
              <select
                id="status"
                name="status"
                value={newVaccine.status}
                onChange={handleInputChange}
                className="w-full"
              >
                <option value="Chưa tiêm">Chưa tiêm</option>
                <option value="Đã tiêm">Đã tiêm</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="note" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ghi chú
              </label>
              <input
                id="note"
                type="text"
                name="note"
                placeholder="Thêm ghi chú (nếu có)"
                value={newVaccine.note}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <button 
              type="button" 
              onClick={handleCancel}
              className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Hủy
            </button>
            <button 
              type="submit" 
              className="btn-primary"
            >
              {editingId ? 'Cập nhật' : 'Thêm mới'}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Hiển thị dữ liệu */}
      {loading ? (
        <div className="card p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Đang tải dữ liệu...</p>
        </div>
      ) : filteredVaccinations.length === 0 ? (
        <div className="card text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {searchTerm ? 'Không tìm thấy dữ liệu phù hợp' : 'Chưa có dữ liệu tiêm chủng'}
          </p>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-primary hover:text-secondary transition-colors duration-200"
            >
              Xóa bộ lọc tìm kiếm
            </button>
          )}
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="table-custom">
            <thead className="table-header">
              <tr>
                <th className="table-th">Tên vaccine</th>
                <th className="table-th">Ngày tiêm</th>
                <th className="table-th">Trạng thái</th>
                <th className="table-th">Ghi chú</th>
                <th className="table-th text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredVaccinations.map((vac) => (
                <motion.tr 
                  key={vac.id} 
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="table-td">
                    <div className="font-medium text-gray-900 dark:text-white">{vac.vaccineName}</div>
                  </td>
                  <td className="table-td">
                    {new Date(vac.date).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="table-td">
                    <button
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        vac.status === "Đã tiêm" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                      } transition-colors duration-200`}
                      onClick={() => toggleStatus(vac.id)}
                      title="Nhấn để thay đổi trạng thái"
                    >
                      {vac.status}
                    </button>
                  </td>
                  <td className="table-td">
                    <div className="text-gray-500 dark:text-gray-400">{vac.note || '—'}</div>
                  </td>
                  <td className="table-td text-right space-x-2">
                    <button 
                      onClick={() => handleEdit(vac)}
                      className="text-primary hover:text-secondary transition-colors duration-200"
                      title="Chỉnh sửa"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => removeVaccination(vac.id)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200 ml-3"
                      title="Xóa"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default VaccinationManagement;
