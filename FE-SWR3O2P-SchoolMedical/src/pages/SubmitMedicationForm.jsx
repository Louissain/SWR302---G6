import React, { useState } from 'react';
import { Form, Input, Button, Typography, DatePicker, Select, Card, message } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

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

  const onFinish = (values) => {
    console.log('Received values of form:', values);
    // Here you would typically send this data to a backend API
    message.success('Thông tin thuốc/vật tư y tế đã được gửi!');
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Vui lòng kiểm tra lại thông tin.');
  };

  return (
    <FormContainer>
      <PageTitle level={2}>Form Gửi Thông Tin Thuốc/Vật Tư Y Tế từ Phụ Huynh</PageTitle>
      <FormCard>
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
            name="studentName"
            rules={[{ required: true, message: 'Vui lòng nhập tên học sinh!' }]

}
          >
            <Input placeholder="Nhập tên học sinh" />
          </StyledFormItem>

          <StyledFormItem
            label="Lớp"
            name="studentClass"
            rules={[{ required: true, message: 'Vui lòng nhập lớp của học sinh!' }]

}
          >
            <Input placeholder="Nhập lớp" />
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