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
  SafetyOutlined,
  FormOutlined,
  SettingOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const StyledHeader = styled(AntHeader)`
  background: linear-gradient(90deg, #6dd5ed 0%, #2193b0 100%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  /* border-bottom-left-radius: 16px; */
  /* border-bottom-right-radius: 16px; */
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
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
    transition: font-size 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      color: #f0f2f5 !important;
      transform: scale(1.08);
      transition: transform 0.1s;
      z-index: 1;
    }
    &:hover a {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    &.ant-menu-item-selected {
      background: rgba(255,255,255,0.18) !important;
      color: #fff !important;
      border-radius: 8px !important;
    }
    &.ant-menu-item-selected::after,
    &::after,
    &:hover::after,
    &.ant-menu-item-active::after {
      display: none !important;
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
    case "form": return <FormOutlined />;
    default: return null;
  }
};

export default function Navbar() {
  const location = useLocation();
  const { isLoggedIn, currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      window.location.href = '/login';
    }, 100);
  };

  const handleLoginRedirect = () => {
    window.location.href = '/login';
  };const userDropdownMenu = (
    <Menu>
      {isLoggedIn ? (
        <>
          <StyledMenuItem key="profile" icon={<UserOutlined />}>
            <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>
              Thông tin cá nhân
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="settings" icon={<SettingOutlined />}>
            Cài đặt
          </StyledMenuItem>
          <Menu.Divider />
          <StyledMenuItem key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
            Đăng xuất
          </StyledMenuItem>
        </>
      ) : (
        <StyledMenuItem key="login" icon={<LoginOutlined />} onClick={handleLoginRedirect}>
          Đăng nhập
        </StyledMenuItem>
      )}
      <Menu.Divider />
      <StyledMenuItem key="sample-data" icon={<InfoCircleOutlined />}>
        <Link to="/sample-data" style={{ color: 'inherit', textDecoration: 'none' }}>
          Dữ liệu mẫu
        </Link>
      </StyledMenuItem>
    </Menu>
  );

  const medicalDropdownMenu = (
    <Menu>
      <Menu.Item key="/medical">
        <Link to="/medical">Quản lý Thuốc và Vật tư Y tế</Link>
      </Menu.Item>
      <Menu.Item key="/submit-medication">
        <Link to="/submit-medication">Form Gửi thuốc từ Phụ huynh</Link>
      </Menu.Item>
    </Menu>
  );

  const navLinks = [
    { path: "/", label: "Trang chủ", icon: "home" },
    { path: "/blog", label: "Blog sức khỏe", icon: "book" },
    { path: "/documents", label: "Tài liệu học đường", icon: "document" },
    { path: "/student-profile", label: "Hồ sơ sức khỏe học sinh", icon: "user" },
    { path: "/vaccination-management", label: "Quản lý Tiêm chủng", icon: "vaccine" },
    { path: "/health-check-management", label: "Kiểm tra sức khỏe định kỳ", icon: "calendar" },
    { path: "/event-management", label: "Quản lý sự kiện", icon: "form" },
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
        <Dropdown overlay={medicalDropdownMenu} trigger={['click']}>
          <Menu.Item key="medical-dropdown" icon={getAntdIcon('medical')} />
        </Dropdown>
      </StyledMenu>      <RightContent>
        <Dropdown overlay={userDropdownMenu} trigger={['click']}>
          <a onClick={e => e.preventDefault()} style={{ color: 'white' }}>
             <Space size="small">
               <StyledAvatar size="default" icon={<UserOutlined />} />
               {isLoggedIn && currentUser && (
                 <Text style={{ color: 'white', fontSize: '14px' }}>
                   {currentUser.name}
                 </Text>
               )}
             </Space>
          </a>
        </Dropdown>
      </RightContent>
    </StyledHeader>
  );
}