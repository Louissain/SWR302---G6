// src/components/HealthCheckManagement.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Dữ liệu giả lập cho các đợt khám sức khỏe
const initialHealthChecks = [
  {
    id: 1,
    name: 'Khám sức khỏe đầu năm 2023-2024',
    startDate: '2023-08-15',
    endDate: '2023-08-30',
    status: 'Đã hoàn thành',
    location: 'Trung tâm Y tế Quận 1',
    description: 'Khám sức khỏe tổng quát đầu năm học cho học sinh các khối',
    participants: 1250,
    progress: 100
  },
  {
    id: 2,
    name: 'Kiểm tra mắt & răng miệng',
    startDate: '2023-10-10',
    endDate: '2023-10-20',
    status: 'Đang diễn ra',
    location: 'Tại trường',
    description: 'Kiểm tra sức khỏe chuyên sâu về mắt và răng miệng cho học sinh',
    participants: 980,
    progress: 65
  },
  {
    id: 3,
    name: 'Khám sức khỏe định kỳ giữa năm',
    startDate: '2024-01-15',
    endDate: '2024-01-25',
    status: 'Sắp diễn ra',
    location: 'Bệnh viện Nhi Đồng',
    description: 'Khám sức khỏe định kỳ giữa năm học cho học sinh các khối',
    participants: 1350,
    progress: 0
  }
];

// Dữ liệu giả lập thông tin sức khỏe
const healthMetrics = [
  { name: 'Thể lực tốt', value: 68, color: 'bg-green-500' },
  { name: 'Thể lực trung bình', value: 25, color: 'bg-yellow-500' },
  { name: 'Cần cải thiện', value: 7, color: 'bg-red-500' },
];

export default function HealthCheckManagement() {
  const [healthChecks, setHealthChecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  
  // Lọc đợt khám theo trạng thái
  const filteredHealthChecks = healthChecks.filter(check => {
    if (activeTab === 'all') return true;
    if (activeTab === 'completed') return check.status === 'Đã hoàn thành';
    if (activeTab === 'ongoing') return check.status === 'Đang diễn ra';
    if (activeTab === 'upcoming') return check.status === 'Sắp diễn ra';
    return true;
  });

  // Hiệu ứng khi trang tải
  useEffect(() => {
    // Giả lập tải dữ liệu
    const timer = setTimeout(() => {
      setHealthChecks(initialHealthChecks);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Xử lý mở rộng/thu gọn chi tiết đợt khám
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Định dạng ngày tháng
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Xác định màu sắc dựa vào trạng thái
  const getStatusColor = (status) => {
    switch (status) {
      case 'Đã hoàn thành':
        return 'bg-green-500';
      case 'Đang diễn ra':
        return 'bg-blue-500';
      case 'Sắp diễn ra':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Quản lý Khám Sức khỏe Định kỳ</h1>
        <p className="text-gray-600 dark:text-gray-400">Lập kế hoạch, tổ chức và theo dõi các đợt khám sức khỏe định kỳ cho học sinh</p>
      </div>
      
      {/* Thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Thông tin các đợt khám</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">{healthChecks.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Tổng số</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">
                {healthChecks.filter(check => check.status === 'Đã hoàn thành').length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Hoàn thành</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {healthChecks.filter(check => check.status === 'Đang diễn ra').length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Đang diễn ra</div>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Học sinh tham gia</h3>
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold text-primary">
              {healthChecks.reduce((sum, check) => sum + check.participants, 0).toLocaleString()}
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Tình trạng sức khỏe</h3>
          <div className="space-y-3">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-4">
                  <div className={`h-2.5 rounded-full ${metric.color}`} style={{ width: `${metric.value}%` }}></div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {metric.name} ({metric.value}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bộ lọc */}
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex overflow-x-auto">
        <button 
          className={`px-4 py-2 rounded-md mr-2 whitespace-nowrap ${activeTab === 'all' 
            ? 'bg-primary text-white' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          onClick={() => setActiveTab('all')}
        >
          Tất cả
        </button>
        <button 
          className={`px-4 py-2 rounded-md mr-2 whitespace-nowrap ${activeTab === 'ongoing' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          onClick={() => setActiveTab('ongoing')}
        >
          Đang diễn ra
        </button>
        <button 
          className={`px-4 py-2 rounded-md mr-2 whitespace-nowrap ${activeTab === 'completed' 
            ? 'bg-green-500 text-white' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          onClick={() => setActiveTab('completed')}
        >
          Đã hoàn thành
        </button>
        <button 
          className={`px-4 py-2 rounded-md mr-2 whitespace-nowrap ${activeTab === 'upcoming' 
            ? 'bg-yellow-500 text-white' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Sắp diễn ra
        </button>
      </div>
      
      {/* Danh sách các đợt khám */}
      {loading ? (
        <div className="card p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Đang tải dữ liệu...</p>
        </div>
      ) : filteredHealthChecks.length === 0 ? (
        <div className="card text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Không có đợt khám sức khỏe nào {activeTab !== 'all' && 'trong trạng thái này'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredHealthChecks.map((check) => (
            <motion.div 
              key={check.id} 
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="p-6 cursor-pointer" 
                onClick={() => toggleExpand(check.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{check.name}</h3>
                      <span className={`ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getStatusColor(check.status)}`}>
                        {check.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {formatDate(check.startDate)} - {formatDate(check.endDate)}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
                      {check.progress}% hoàn thành
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          check.progress === 100 ? 'bg-green-500' : 
                          check.progress > 50 ? 'bg-blue-500' : 
                          check.progress > 0 ? 'bg-yellow-500' : 'bg-gray-300'
                        }`} 
                        style={{ width: `${check.progress}%` }}
                      ></div>
                    </div>
                    <button className="ml-4 text-primary dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${expandedId === check.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Địa điểm</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{check.location}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Số học sinh</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{check.participants.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Chi tiết đợt khám */}
              {expandedId === check.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white mb-2">Mô tả</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{check.description}</p>
                      
                      <h4 className="font-medium text-gray-800 dark:text-white mb-2">Thông tin chi tiết</h4>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="text-gray-500 dark:text-gray-400 w-32">Người phụ trách:</span>
                          <span className="text-gray-800 dark:text-gray-200">BS. Nguyễn Văn A</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 dark:text-gray-400 w-32">Đơn vị phối hợp:</span>
                          <span className="text-gray-800 dark:text-gray-200">Trung tâm Y tế Dự phòng</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 dark:text-gray-400 w-32">Các khối tham gia:</span>
                          <span className="text-gray-800 dark:text-gray-200">1, 2, 3, 4, 5</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-4 md:pt-0 md:pl-6">
                      <h4 className="font-medium text-gray-800 dark:text-white mb-4">Hoạt động kế tiếp</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${check.status === 'Đã hoàn thành' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-gray-200">Gửi thông báo cho phụ huynh</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Gửi thông báo kết quả khám sức khỏe</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${check.status === 'Đã hoàn thành' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-gray-200">Cập nhật hồ sơ học sinh</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Cập nhật dữ liệu vào hồ sơ sức khỏe</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${check.status === 'Đã hoàn thành' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-gray-200">Báo cáo tổng kết</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Lập báo cáo tổng kết đợt khám</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Các nút hành động */}
                  <div className="mt-6 flex justify-end space-x-3">
                    <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      Xem chi tiết
                    </button>
                    {check.status !== 'Đã hoàn thành' && (
                      <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors duration-200">
                        {check.status === 'Sắp diễn ra' ? 'Bắt đầu' : 'Cập nhật'}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Nút thêm mới */}
      <div className="mt-8 flex justify-center">
        <button className="btn-primary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Thêm đợt khám mới
        </button>
      </div>
    </div>
  );
}
