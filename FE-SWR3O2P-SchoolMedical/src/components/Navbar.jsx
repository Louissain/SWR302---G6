import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown, Space, Button, Typography } from 'antd';
import { 
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  BookOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
  CalendarOutlined,
  SafetyOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const StyledHeader = styled(AntHeader)`
  background-color: #1890ff;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const Logo = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-right: 40px;
`;

const StyledMenu = styled(Menu)`
  flex-grow: 1;
  border-bottom: none !important;
  background-color: transparent !important;
  .ant-menu-item {
    color: white !important;
    &:hover {
      color: #f0f2f5 !important;
    }
    &.ant-menu-item-selected {
      background-color: #096dd9 !important;
      color: white !important;
    }
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledAvatar = styled(Avatar)`
  cursor: pointer;
  background-color: #f56a00;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.3);
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  min-width: 150px;
`;

const getAntdIcon = (iconName) => {
  switch (iconName) {
    case "home": return <HomeOutlined />;
    case "info": return <InfoCircleOutlined />;
    case "book": return <BookOutlined />;
    case "document": return <FileTextOutlined />;
    case "user": return <UserOutlined />;
    case "vaccine": return <SafetyOutlined />;
    case "calendar": return <CalendarOutlined />;
    case "medical": return <MedicineBoxOutlined />;
    default: return null;
  }
};

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    console.log('Logging out...');
    setIsLoggedIn(false);
  };

  const handleLoginRedirect = () => {
    console.log('Redirecting to login page...');
    window.location.href = '/login';
  };

  const menu = (
    <Menu>
      {isLoggedIn ? (
        <StyledMenuItem key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
          Đăng xuất
        </StyledMenuItem>
      ) : (
        <StyledMenuItem key="login" icon={<LoginOutlined />} onClick={handleLoginRedirect}>
          Đăng nhập
        </StyledMenuItem>
      )}
      {isLoggedIn && (
         <StyledMenuItem key="profile" icon={<UserOutlined />}>
            Thông tin cá nhân
         </StyledMenuItem>
      )}
       {isLoggedIn && (
         <StyledMenuItem key="settings" icon={<SettingOutlined />}>
            Cài đặt
         </StyledMenuItem>
      )}
    </Menu>
  );

  const navLinks = [
    { path: "/", label: "Trang chủ", icon: "home" },
    { path: "/about", label: "Giới thiệu", icon: "info" },
    { path: "/blog", label: "Blog sức khỏe", icon: "book" },
    { path: "/documents", label: "Tài liệu học đường", icon: "document" },
    { path: "/student-profile", label: "Hồ sơ sức khỏe học sinh", icon: "user" },
    { path: "/vaccination-management", label: "Quản lý Tiêm chủng", icon: "vaccine" },
    { path: "/health-check-management", label: "Kiểm tra sức khỏe định kỳ", icon: "calendar" },
    { path: "/medical", label: "Thuốc và vật tư y tế", icon: "medical" },
  ];

  const selectedKeys = [location.pathname];

  return (
    <StyledHeader>
      <Logo>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
           Quản lý Y tế Học đường
        </Link>
      </Logo>
      
      <StyledMenu mode="horizontal" selectedKeys={selectedKeys}>
        {navLinks.map(link => (
          <Menu.Item key={link.path} icon={getAntdIcon(link.icon)}>
            <Link to={link.path}>{link.label}</Link>
          </Menu.Item>
        ))}
      </StyledMenu>

      <RightContent>
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()} style={{ color: 'white' }}>
             <Space size="small">
               <StyledAvatar size="default" icon={<UserOutlined />} />
             </Space>
          </a>
        </Dropdown>
      </RightContent>
    </StyledHeader>
  );
}