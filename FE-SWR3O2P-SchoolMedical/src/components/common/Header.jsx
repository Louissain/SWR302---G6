import React from 'react'
import { Bell, User, Settings } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Quản lý Y tế Học đường
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
            <Settings size={20} />
          </button>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
            <User size={20} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Y tá trưởng</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header