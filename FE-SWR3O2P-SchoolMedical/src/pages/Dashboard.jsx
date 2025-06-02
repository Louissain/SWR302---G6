import React from 'react'
import { Users, Syringe, Heart, Calendar, TrendingUp, AlertTriangle, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Tổng số học sinh',
      value: '1,234',
      change: '+12',
      changeType: 'increase',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Tiêm chủng hoàn thành',
      value: '98%',
      change: '+2%',
      changeType: 'increase',
      icon: Syringe,
      color: 'green'
    },
    {
      title: 'Sự kiện y tế',
      value: '15',
      change: '+3',
      changeType: 'increase',
      icon: Activity,
      color: 'red'
    },
    {
      title: 'Cần theo dõi',
      value: '23',
      change: '-5',
      changeType: 'decrease',
      icon: AlertTriangle,
      color: 'orange'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'event',
      message: 'Học sinh Nguyễn Văn A bị sốt cao - Cần theo dõi',
      time: '1 giờ trước'
    },
    {
      id: 2,
      type: 'vaccination',
      message: 'Học sinh Nguyễn Văn A đã hoàn thành mũi tiêm COVID-19',
      time: '2 giờ trước'
    },
    {
      id: 3,
      type: 'health-check',
      message: 'Kiểm tra sức khỏe định kỳ lớp 6A đã hoàn thành',
      time: '4 giờ trước'
    },
    {
      id: 4,
      type: 'alert',
      message: 'Học sinh Trần Thị B cần tái khám mắt',
      time: '1 ngày trước'
    }
  ]

  const handleQuickAction = (action) => {
    switch(action) {
      case 'event':
        navigate('/event-management');
        break;
      // ... other cases
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Tổng quan</h1>
        <div className="text-sm text-gray-500">
          Cập nhật lần cuối: {new Date().toLocaleString('vi-VN')}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">so với tháng trước</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'green' ? 'bg-green-100' :
                  stat.color === 'purple' ? 'bg-purple-100' :
                  stat.color === 'red' ? 'bg-red-100' :
                  'bg-orange-100'
                }`}>
                  <Icon size={24} className={`${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    stat.color === 'red' ? 'text-red-600' :
                    'text-orange-600'
                  }`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activities & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Hoạt động gần đây</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'vaccination' ? 'bg-green-500' :
                  activity.type === 'health-check' ? 'bg-blue-500' :
                  activity.type === 'event' ? 'bg-red-500' :
                  'bg-orange-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h2>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleQuickAction('event')}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Activity size={24} className="text-red-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Tạo sự kiện</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Users size={24} className="text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Thêm học sinh</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Syringe size={24} className="text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Lập lịch tiêm</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart size={24} className="text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Kiểm tra sức khỏe</span>
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Lịch sắp tới</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Activity className="text-red-600" size={20} />
              <div>
                <p className="font-medium text-gray-900">Kiểm tra sức khỏe sau tai nạn - Lớp 8C</p>
                <p className="text-sm text-gray-600">Ngày 24/05/2025 - 10:00 AM</p>
              </div>
            </div>
            <button className="text-red-600 hover:text-red-800 font-medium text-sm">
              Chi tiết
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Calendar className="text-blue-600" size={20} />
              <div>
                <p className="font-medium text-gray-900">Kiểm tra sức khỏe lớp 7B</p>
                <p className="text-sm text-gray-600">Ngày 25/05/2025 - 8:00 AM</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Chi tiết
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Syringe className="text-green-600" size={20} />
              <div>
                <p className="font-medium text-gray-900">Tiêm vắc xin cúm mùa</p>
                <p className="text-sm text-gray-600">Ngày 28/05/2025 - 9:00 AM</p>
              </div>
            </div>
            <button className="text-green-600 hover:text-green-800 font-medium text-sm">
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard