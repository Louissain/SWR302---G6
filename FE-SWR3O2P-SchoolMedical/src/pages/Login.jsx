import { useState } from 'react';
import { Form, Input, Button, Typography, Card, Space, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;

const Container = styled.div`
  min-height: calc(100vh - 64px);
  background: linear-gradient(to right bottom, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 450px; // Increased max-width
  border-radius: 12px; // More rounded corners
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25); // Stronger, softer shadow
  padding: 30px; // Increased internal padding
  text-align: center;
  background-color: rgba(255, 255, 255, 0.95); // Slightly transparent white background
  backdrop-filter: blur(5px); // Frosted glass effect
`;

const StyledTitle = styled(Title)`
  margin-bottom: 30px !important; // More space below title
  color: #1890ff; // Ant Design primary blue
  font-weight: 700; // Bold title
`;

const StyledButton = styled(Button)`
  margin-top: 20px; // More space above the button
  border-radius: 25px; // More rounded button
  height: 45px; // Increased height
  font-size: 17px; // Slightly larger font size
  font-weight: 600; // Semi-bold text
  background: linear-gradient(to right, #1890ff 0%, #096dd9 100%); // Gradient button background
  border: none; // No border
  &:hover {
    opacity: 0.9;
  }
`;

const ToggleButton = styled(Button)`
  padding: 0 !important;
  height: auto !important;
`;

function Loginn() {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(isLogin ? 'Login data:' : 'Register data:', values);
    // Add your authentication logic here (e.g., dispatching an action)
    // On success, you might redirect the user:
    // history.push('/dashboard'); // Assuming you have history available
  };

  return (
    <Container>
      <StyledCard>
        <StyledTitle level={2}>
          {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
        </StyledTitle>
        
        <Form
          form={form}
          name="login_register"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          layout="vertical"
        >
          {!isLogin && (
            <Form.Item
              name="name"
              label="Họ và Tên"
              rules={[
                { required: true, message: 'Vui lòng nhập họ và tên!' },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nhập họ và tên" size="large" />
            </Form.Item>
          )}
          
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Vui lòng nhập email của bạn!' },
              { type: 'email', message: 'Email không hợp lệ!' },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Nhập email" size="large" />
          </Form.Item>
          
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu của bạn!' },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Nhập mật khẩu" size="large" />
          </Form.Item>
          
          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              label="Xác nhận mật khẩu"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                  }
                })
              ]}
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Xác nhận mật khẩu" size="large" />
            </Form.Item>
          )}
          
          {isLogin && (
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ đăng nhập</Checkbox>
            </Form.Item>
          )}

          <Form.Item>
            <StyledButton type="primary" htmlType="submit" block>
              {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
            </StyledButton>
          </Form.Item>
        </Form>
        
        <Text type="secondary">
          {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
          <ToggleButton type="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
          </ToggleButton>
        </Text>
      </StyledCard>
    </Container>
  );
}

export default Loginn;