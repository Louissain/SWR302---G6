import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown, Space, Button, Typography } from 'antd';
import { 
  BellOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  LoginOutlined
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
  z-index: 1;
`;

const Logo = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
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
  min-width: 120px;
`;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <StyledHeader>
      <Logo>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
           Quản lý Y tế Học đường
        </Link>
      </Logo>
      
      <RightContent>
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
             <Space size="small">
               <StyledAvatar size="default" icon={<UserOutlined />} />
                {isLoggedIn && <Text style={{ color: 'white' }}>Y tá trưởng</Text>}
             </Space>
          </a>
        </Dropdown>
      </RightContent>
    </StyledHeader>
  );
}

export default Header;