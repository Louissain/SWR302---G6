import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar, Button, Typography, Space, Divider, message, Row, Col } from 'antd';
import { UserOutlined, LogoutOutlined, EditOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

const { Title, Text } = Typography;

const Container = styled.div`
  min-height: calc(100vh - 64px);
  background: linear-gradient(to right bottom, #f0f2f5 0%, #e6f7ff 100%);
  padding: 30px 20px;
`;

const ProfileCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

const ProfileHeader = styled.div`
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  padding: 40px 30px;
  text-align: center;
  color: white;
`;

const ProfileBody = styled.div`
  padding: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  .anticon {
    margin-right: 12px;
    color: #1890ff;
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 8px;
  height: 40px;
  font-weight: 500;
`;

function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, logout, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loading && (!isLoggedIn || !currentUser)) {
      // Nếu chưa đăng nhập, chuyển hướng về trang login
      message.warning('Vui lòng đăng nhập để truy cập trang này');
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, currentUser, loading, navigate]);

  const handleLogout = () => {
    setIsLoading(true);
    
    message.success('Đăng xuất thành công!');
    
    logout();
    
    setTimeout(() => {
      navigate('/login', { replace: true });
      setIsLoading(false);
    }, 1000);
  };

  const handleEditProfile = () => {
    message.info('Tính năng chỉnh sửa hồ sơ sẽ được phát triển trong tương lai');
  };
  if (loading || !currentUser) {
    return null;
  }

  return (
    <Container>
      <ProfileCard>
        <ProfileHeader>
          <Avatar 
            size={100} 
            icon={<UserOutlined />}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              marginBottom: '20px'
            }}
          />
          <Title level={2} style={{ color: 'white', margin: '0 0 8px 0' }}>
            {currentUser.name}
          </Title>
          <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px' }}>
            {currentUser.role || 'Người dùng'}
          </Text>
        </ProfileHeader>

        <ProfileBody>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={16}>
              <Title level={4} style={{ marginBottom: '24px' }}>
                Thông tin cá nhân
              </Title>
              
              <InfoItem>
                <UserOutlined />
                <div>
                  <Text strong>Họ và tên: </Text>
                  <Text>{currentUser.name}</Text>
                </div>
              </InfoItem>
              
              <InfoItem>
                <MailOutlined />
                <div>
                  <Text strong>Email: </Text>
                  <Text>{currentUser.email}</Text>
                </div>
              </InfoItem>
              
              <InfoItem>
                <PhoneOutlined />
                <div>
                  <Text strong>Số điện thoại: </Text>
                  <Text>{currentUser.phone || 'Chưa cập nhật'}</Text>
                </div>
              </InfoItem>

              {currentUser.studentId && (
                <InfoItem>
                  <UserOutlined />
                  <div>
                    <Text strong>Mã sinh viên: </Text>
                    <Text>{currentUser.studentId}</Text>
                  </div>
                </InfoItem>
              )}

              {currentUser.role && (
                <InfoItem>
                  <UserOutlined />
                  <div>
                    <Text strong>Vai trò: </Text>
                    <Text>{currentUser.role}</Text>
                  </div>
                </InfoItem>
              )}
            </Col>

            <Col xs={24} md={8}>
              <Title level={4} style={{ marginBottom: '24px' }}>
                Hành động
              </Title>
              
              <Space direction="vertical" style={{ width: '100%' }} size="middle">
                <StyledButton 
                  type="primary" 
                  icon={<EditOutlined />} 
                  block
                  onClick={handleEditProfile}
                >
                  Chỉnh sửa hồ sơ
                </StyledButton>
                  <StyledButton 
                  danger 
                  icon={<LogoutOutlined />} 
                  block
                  loading={isLoading}
                  onClick={handleLogout}
                >
                  Đăng xuất
                </StyledButton>
              </Space>
            </Col>
          </Row>

          <Divider />

          <div style={{ textAlign: 'center' }}>
            <Text type="secondary">
              Tham gia từ: {new Date().toLocaleDateString('vi-VN')}
            </Text>
          </div>
        </ProfileBody>
      </ProfileCard>
    </Container>
  );
}

export default Profile;
