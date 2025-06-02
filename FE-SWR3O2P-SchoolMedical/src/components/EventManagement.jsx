import React, { useState } from 'react';
import { FaHeartbeat, FaSyringe, FaExclamationTriangle, FaQuestionCircle } from 'react-icons/fa';

const eventTypeOptions = [
  { value: 'accident', label: 'Tai nạn', icon: <FaExclamationTriangle className="inline mr-1 text-red-500" /> },
  { value: 'fever', label: 'Sốt', icon: <FaHeartbeat className="inline mr-1 text-orange-500" /> },
  { value: 'disease', label: 'Dịch bệnh', icon: <FaSyringe className="inline mr-1 text-green-500" /> },
  { value: 'other', label: 'Khác', icon: <FaQuestionCircle className="inline mr-1 text-gray-400" /> },
];

const severityColors = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-700',
};

const statusColors = {
  pending: 'bg-gray-100 text-gray-700',
  processing: 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
};

const statusLabels = {
  pending: 'Chờ xử lý',
  processing: 'Đang xử lý',
  completed: 'Đã xử lý',
};

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    type: '',
    description: '',
    studentId: '',
    severity: 'low',
    status: 'pending',
    date: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents(prev => [
      { ...newEvent, id: Date.now() },
      ...prev
    ]);
    setNewEvent({
      type: '',
      description: '',
      studentId: '',
      severity: 'low',
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const updateEventStatus = (eventId, newStatus) => {
    setEvents(prev =>
      prev.map(event =>
        event.id === eventId ? { ...event, status: newStatus } : event
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-2 md:px-0">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-2">Quản lý sự kiện y tế</h2>
        <p className="text-gray-500 mb-4">Theo dõi, thêm mới và cập nhật các sự kiện y tế trong trường học.</p>
      </div>

      {/* Form thêm sự kiện mới */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-blue-100">
        <h3 className="text-xl font-bold text-blue-600 mb-6">Thêm sự kiện mới</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Loại sự kiện</label>
            <select
              name="type"
              value={newEvent.type}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
              required
            >
              <option value="">Chọn loại sự kiện</option>
              {eventTypeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Mức độ nghiêm trọng</label>
            <select
              name="severity"
              value={newEvent.severity}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
              required
            >
              <option value="low">Thấp</option>
              <option value="medium">Trung bình</option>
              <option value="high">Cao</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Mã học sinh</label>
            <input
              type="text"
              name="studentId"
              value={newEvent.studentId}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
              required
              placeholder="Nhập mã học sinh"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Ngày xảy ra</label>
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2 text-gray-700">Mô tả</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
              rows="3"
              required
              placeholder="Mô tả chi tiết sự kiện..."
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all"
        >
          + Thêm sự kiện
        </button>
      </form>

      {/* Danh sách sự kiện */}
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100">
        <h3 className="text-xl font-bold text-blue-600 p-6 border-b">Danh sách sự kiện</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700">Ngày</th>
                <th className="p-4 text-left font-semibold text-gray-700">Loại</th>
                <th className="p-4 text-left font-semibold text-gray-700">Mã HS</th>
                <th className="p-4 text-left font-semibold text-gray-700">Mức độ</th>
                <th className="p-4 text-left font-semibold text-gray-700">Trạng thái</th>
                <th className="p-4 text-left font-semibold text-gray-700">Mô tả</th>
                <th className="p-4 text-left font-semibold text-gray-700">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-400">Chưa có sự kiện nào.</td>
                </tr>
              )}
              {events.map(event => {
                const typeOpt = eventTypeOptions.find(opt => opt.value === event.type);
                return (
                  <tr key={event.id} className="border-t hover:bg-blue-50 transition-all">
                    <td className="p-4">{event.date}</td>
                    <td className="p-4 flex items-center gap-2">
                      {typeOpt?.icon}
                      <span>{typeOpt?.label || event.type}</span>
                    </td>
                    <td className="p-4">{event.studentId}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${severityColors[event.severity]}`}>{event.severity === 'low' ? 'Thấp' : event.severity === 'medium' ? 'Trung bình' : 'Cao'}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[event.status]}`}>{statusLabels[event.status]}</span>
                    </td>
                    <td className="p-4 max-w-xs truncate" title={event.description}>{event.description}</td>
                    <td className="p-4">
                      <select
                        value={event.status}
                        onChange={(e) => updateEventStatus(event.id, e.target.value)}
                        className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
                      >
                        <option value="pending">Chờ xử lý</option>
                        <option value="processing">Đang xử lý</option>
                        <option value="completed">Đã xử lý</option>
                      </select>
                      <button
                        onClick={() => updateEventStatus(event.id, 'completed')}
                        className="ml-2 text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg text-xs font-bold shadow transition-all"
                      >
                        Hoàn thành
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventManagement; 