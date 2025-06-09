import React, { useState } from 'react';
import { Card, Button, Typography, Divider, message, Space, Tag } from 'antd';
import { CopyOutlined, UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { quickLoginData, quickRegisterData } from '../data/mockData';

const { Title, Text, Paragraph } = Typography;

const SampleDataHelper = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(field);
    message.success(`Đã copy ${field}!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const UserCard = ({ title, data, role, color }) => (
    <Card 
      title={
        <Space>
          <Tag color={color}>{role}</Tag>
          <Text strong>{title}</Text>
        </Space>
      }
      style={{ marginBottom: 16 }}
      size="small"
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        {data.name && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Space>
              <UserOutlined />
              <Text>{data.name}</Text>
            </Space>
            <Button 
              size="small" 
              icon={<CopyOutlined />} 
              onClick={() => copyToClipboard(data.name, 'Họ tên')}
              type={copiedItem === 'Họ tên' ? 'primary' : 'default'}
            />
          </div>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            <MailOutlined />
            <Text>{data.email}</Text>
          </Space>
          <Button 
            size="small" 
            icon={<CopyOutlined />} 
            onClick={() => copyToClipboard(data.email, 'Email')}
            type={copiedItem === 'Email' ? 'primary' : 'default'}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            <LockOutlined />
            <Text>{data.password}</Text>
          </Space>
          <Button 
            size="small" 
            icon={<CopyOutlined />} 
            onClick={() => copyToClipboard(data.password, 'Mật khẩu')}
            type={copiedItem === 'Mật khẩu' ? 'primary' : 'default'}
          />
        </div>
      </Space>
    </Card>
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
        🔐 Dữ liệu mẫu cho tài khoản
      </Title>
      
      <Paragraph style={{ textAlign: 'center', marginBottom: '30px' }}>
        Bạn có thể sử dụng các tài khoản mẫu dưới đây để test tính năng đăng nhập và đăng ký.
        Nhấn vào nút <CopyOutlined style={{ color: '#1890ff' }} /> để copy thông tin.
      </Paragraph>

      <Title level={3}>📝 Tài khoản cho Đăng nhập</Title>
      
      <UserCard 
        title="Hiệu trường" 
        data={quickLoginData.principal} 
        role="PRINCIPAL"
        color="red"
      />
      
      <UserCard 
        title="Y tá trường học" 
        data={quickLoginData.nurse} 
        role="NURSE"
        color="green"
      />
      
      <UserCard 
        title="Giáo viên" 
        data={quickLoginData.teacher} 
        role="TEACHER"
        color="blue"
      />
      
      <UserCard 
        title="Phụ huynh" 
        data={quickLoginData.parent} 
        role="PARENT"
        color="orange"
      />
      
      <UserCard 
        title="Bác sĩ" 
        data={quickLoginData.doctor} 
        role="DOCTOR"
        color="purple"
      />
      
      <UserCard 
        title="Quản trị viên" 
        data={quickLoginData.admin} 
        role="ADMIN"
        color="gold"
      />

      <Divider />

      <Title level={3}>✍️ Dữ liệu mẫu cho Đăng ký</Title>
      
      <UserCard 
        title="Hiệu trường" 
        data={quickRegisterData.principal} 
        role="PRINCIPAL"
        color="red"
      />
      
      <UserCard 
        title="Y tá trường học" 
        data={quickRegisterData.nurse} 
        role="NURSE"
        color="green"
      />
      
      <UserCard 
        title="Giáo viên" 
        data={quickRegisterData.teacher} 
        role="TEACHER"
        color="blue"
      />
      
      <UserCard 
        title="Phụ huynh" 
        data={quickRegisterData.parent} 
        role="PARENT"
        color="orange"
      />
      
      <UserCard 
        title="Bác sĩ" 
        data={quickRegisterData.doctor} 
        role="DOCTOR"
        color="purple"
      />

      <Divider />

      <Card title="💡 Hướng dẫn sử dụng" style={{ marginTop: '20px' }}>
        <ol>
          <li>Chọn tài khoản phù hợp với vai trò bạn muốn test</li>
          <li>Nhấn vào nút <CopyOutlined style={{ color: '#1890ff' }} /> để copy thông tin</li>
          <li>Paste vào form đăng nhập hoặc đăng ký</li>
          <li>Tất cả mật khẩu đều là: <Text code>123456789</Text> (trừ Admin: <Text code>admin123456</Text>)</li>
        </ol>
      </Card>
    </div>
  );
};

export default SampleDataHelper;
