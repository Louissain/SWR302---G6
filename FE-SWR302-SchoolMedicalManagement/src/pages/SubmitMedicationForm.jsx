import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, DatePicker, Select, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { getChildrenByParentEmail } from '../data/mockData';
import { useAuth } from '../hooks/useAuth';

const { Title } = Typography;
const { Option } = Select;

const FormContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  min-height: calc(100vh - 64px); // Adjust based on your header height
`;

const FormCard = styled(Card)`
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const PageTitle = styled(Title)`
  text-align: center;
  margin-bottom: 30px !important;
  color: #001f3f; // Dark blue color
`;

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label > label {
    color: #333; // Darker label color
    font-weight: 500;
  }
`;

const SubmitMedicationForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, loading } = useAuth();
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    if (!loading && (!isLoggedIn || !currentUser)) {
      message.warning('Vui lòng đăng nhập để truy cập trang này');
      navigate('/login', { replace: true });
      return;
    }
    
    if (currentUser && currentUser.role !== 'parent') {
      message.warning('Chỉ có phụ huynh mới có thể truy cập trang này');
      navigate('/', { replace: true });
      return;
    }
    
    if (currentUser) {
      // Lấy danh sách con của phụ huynh
      const childrenList = getChildrenByParentEmail(currentUser.email);
      setChildren(childrenList);
      
      if (childrenList.length === 0) {
        message.warning('Không tìm thấy thông tin con em. Vui lòng liên hệ nhà trường.');
      }
    }
  }, [isLoggedIn, currentUser, loading, navigate]);

  const handleChildSelect = (value) => {
    const child = children.find(c => c.studentId === value);
    setSelectedChild(child);
    
    // Tự động điền thông tin lớp
    if (child) {
      form.setFieldsValue({
        studentClass: child.class
      });
    }
  };
  const onFinish = (values) => {
    const submissionData = {
      ...values,
      parentName: currentUser?.name,
      parentEmail: currentUser?.email,
      parentPhone: currentUser?.phone,
      submissionDate: moment().format('DD/MM/YYYY HH:mm'),
      status: 'pending'
    };
    
    console.log('Medication submission data:', submissionData);
    // Here you would typically send this data to a backend API
    message.success(`Thông tin thuốc/vật tư y tế cho ${selectedChild?.name} đã được gửi thành công!`);
    form.resetFields();
    setSelectedChild(null);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Vui lòng kiểm tra lại thông tin.');
  };

  // Không hiển thị form nếu chưa có dữ liệu người dùng
  if (!currentUser || children.length === 0) {
    return (
      <FormContainer>
        <PageTitle level={2}>Form Gửi Thông Tin Thuốc/Vật Tư Y Tế từ Phụ Huynh</PageTitle>
        <FormCard>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Title level={4}>Đang tải thông tin...</Title>
          </div>
        </FormCard>
      </FormContainer>
    );
  }
  return (
    <FormContainer>
      <PageTitle level={2}>Form Gửi Thông Tin Thuốc/Vật Tư Y Tế từ Phụ Huynh</PageTitle>
      <FormCard>
        <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: '6px' }}>
          <strong>Phụ huynh:</strong> {currentUser.name} | <strong>Email:</strong> {currentUser.email}
        </div>
        
        <Form
          form={form}
          name="medication_submission"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <StyledFormItem
            label="Tên học sinh"
            name="studentId"
            rules={[{ required: true, message: 'Vui lòng chọn học sinh!' }]}
          >
            <Select 
              placeholder="Chọn học sinh"
              onChange={handleChildSelect}
              style={{ width: '100%' }}
            >
              {children.map(child => (
                <Option key={child.studentId} value={child.studentId}>
                  {child.name} - {child.class} (Mã: {child.studentId})
                </Option>
              ))}
            </Select>
          </StyledFormItem>

          <StyledFormItem
            label="Lớp"
            name="studentClass"
          >
            <Input 
              placeholder="Lớp sẽ được tự động điền khi chọn học sinh" 
              disabled
              style={{ backgroundColor: '#f5f5f5' }}
            />
          </StyledFormItem>

          <StyledFormItem
            label="Tên thuốc/Vật tư y tế"
            name="itemName"
            rules={[{ required: true, message: 'Vui lòng nhập tên thuốc hoặc vật tư!' }]

}
          >
            <Input placeholder="Ví dụ: Thuốc hạ sốt Paracetamol, Băng gạc y tế" />
          </StyledFormItem>

          <StyledFormItem
            label="Liều lượng/Hướng dẫn sử dụng"
            name="instructions"
            rules={[{ required: true, message: 'Vui lòng nhập liều lượng hoặc hướng dẫn sử dụng!' }]

}
          >
            <Input.TextArea rows={3} placeholder="Ví dụ: Uống 1 viên sau ăn, ngày 2 lần; Thay băng 1 lần/ngày" />
          </StyledFormItem>

          <StyledFormItem
            label="Ngày hết hạn (nếu có)"
            name="expiryDate"
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
          </StyledFormItem>

           <StyledFormItem
            label="Ghi chú thêm (nếu có)"
            name="notes"
          >
            <Input.TextArea rows={2} placeholder="Thông tin khác cần lưu ý..." />
          </StyledFormItem>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Gửi thông tin
            </Button>
          </Form.Item>
        </Form>
      </FormCard>
    </FormContainer>
  );
};

export default SubmitMedicationForm; 