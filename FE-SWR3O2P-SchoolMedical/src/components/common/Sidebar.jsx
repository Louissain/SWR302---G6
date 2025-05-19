import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  Syringe, 
  Heart,
  FileText,
  Calendar,
  Activity
} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    {
      path: '/dashboard',
      label: 'Tổng quan',
      icon: LayoutDashboard
    },
    {
      path: '/students',
      label: 'Hồ sơ học sinh',
      icon: Users
    },
    {
      path: '/vaccination',
      label: 'Tiêm chủng',
      icon: Syringe
    },
    {
      path: '/health-check',
      label: 'Kiểm tra sức khỏe',
      icon: Heart
    }
  ]

  return (
    <aside className="fixed left-0 top-16 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar