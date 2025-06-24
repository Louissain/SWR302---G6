// src/components/StudentProfile.jsx
import React, { useState, useEffect } from "react";
import { 
  Form, 
  Input, 
  Button, 
  Space, 
  Typography, 
  Card, 
  DatePicker, 
  Divider,
  List,
  Popconfirm,
  Row,
  Col,
  Select,
  Tooltip
} from "antd";
import { 
  PlusOutlined, 
  DeleteOutlined,
  MedicineBoxOutlined, 
  CalendarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  HeartOutlined,
  SafetyOutlined,
  EyeOutlined,
  SoundOutlined
} from "@ant-design/icons";
import styled from "styled-components";
import moment from 'moment';
import { useAuth } from '../../hooks/useAuth';
import { getChildrenByParentEmail } from '../../data/mockData';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f2f5;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  .ant-card-head {
    background-color: #e6f7ff;
    border-bottom: 1px solid #d9d9d9;
    font-weight: bold;
    color: #1890ff;
  }

  .ant-card-extra {
    line-height: normal;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
  border-radius: 4px;
`;

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ListItemContent = styled(Space)`
  flex-grow: 1;
`;

const ListItemActions = styled(Space)`
  flex-shrink: 0;
`;

const initialProfile = {
  fullName: "",
  dob: null,
  allergies: "",
  chronicDiseases: "",
  vision: "",
  hearing: "",
  vaccinations: [],
  healthChecks: [],
};

// Example statuses for vaccination and health checks - can be expanded
const vaccinationStatuses = ['Đã tiêm', 'Chưa tiêm', 'Đang chờ'];
const healthCheckResults = ['Bình thường', 'Cần theo dõi', 'Bất thường'];

function StudentProfile() {
  const [profile, setProfile] = useState(initialProfile);
  const [form] = Form.useForm();
  const { currentUser, isLoggedIn } = useAuth();
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);

  // Kiểm tra nếu là phụ huynh và lấy danh sách con
  useEffect(() => {
    if (isLoggedIn && currentUser && currentUser.role === 'parent') {
      const childrenList = getChildrenByParentEmail(currentUser.email);
      setChildren(childrenList);
    }
  }, [currentUser, isLoggedIn]);

  const handleChildSelect = (value) => {
    const child = children.find(c => c.studentId === value);
    setSelectedChild(child);
    
    // Tự động điền thông tin của học sinh đã chọn
    if (child) {
      form.setFieldsValue({
        fullName: child.name
      });
      setProfile(prev => ({
        ...prev,
        fullName: child.name
      }));
    }
  };

  // Set form initial values when profile changes (e.g., loading existing data)
  useEffect(() => {
    form.setFieldsValue({
      ...profile,
      dob: profile.dob ? moment(profile.dob) : null,
    });
  }, [profile, form]);

  const handleChange = (changedValues, allValues) => {
    // Use functional update to ensure latest state is used
    setProfile(prevProfile => {
      const updatedProfile = { ...prevProfile, ...allValues };

      // Handle DatePicker moment objects if they are present in changedValues
      if (changedValues.dob && moment.isMoment(changedValues.dob)) {
         updatedProfile.dob = changedValues.dob.format('YYYY-MM-DD');
      }
      // Note: Handling nested date changes (like in vaccinations/healthChecks) requires more complex logic
      // For simplicity in this example, we'll rely on the individual handlers updating the state correctly.

      return updatedProfile;
    });
  };

  // Hàm thêm tiêm chủng mới
  const addVaccination = () => {
    setProfile((prev) => ({
      ...prev,
      vaccinations: [...prev.vaccinations, { vaccine: "", date: null, status: "" }],
    }));
  };

  // Hàm thay đổi tiêm chủng
  const handleVaccinationChange = (index, field, value) => {
    const newVaccinations = [...profile.vaccinations];
    // Handle DatePicker moment object for vaccination date
    if (field === 'date' && moment.isMoment(value)) {
       newVaccinations[index][field] = value.format('YYYY-MM-DD');
    } else {
       newVaccinations[index][field] = value;
    }
    setProfile((prev) => ({ ...prev, vaccinations: newVaccinations }));
  };

  // Hàm xóa tiêm chủng
  const removeVaccination = (index) => {
    setProfile((prev) => ({
      ...prev,
      vaccinations: prev.vaccinations.filter((_, i) => i !== index),
    }));
  };

  // Tương tự với kiểm tra sức khỏe
  const addHealthCheck = () => {
    setProfile((prev) => ({
      ...prev,
      healthChecks: [...prev.healthChecks, { date: null, result: "" }],
    }));
  };

  const handleHealthCheckChange = (index, field, value) => {
    const newHealthChecks = [...profile.healthChecks];
    // Handle DatePicker moment object for health check date
     if (field === 'date' && moment.isMoment(value)) {
       newHealthChecks[index][field] = value.format('YYYY-MM-DD');
    } else {
       newHealthChecks[index][field] = value;
    }
    setProfile((prev) => ({ ...prev, healthChecks: newHealthChecks }));
  };

  const removeHealthCheck = (index) => {
    setProfile((prev) => ({
      ...prev,
      healthChecks: prev.healthChecks.filter((_, i) => i !== index),
    }));
  };
  // Hàm submit (ở đây tạm thời chỉ log ra console)
  const handleSubmit = (values) => {
    // Bao gồm thông tin học sinh đã chọn nếu là phụ huynh
    const submissionData = {
      ...profile,
      ...values,
      studentInfo: selectedChild ? {
        studentId: selectedChild.studentId,
        name: selectedChild.name,
        class: selectedChild.class
      } : null,
      parentInfo: currentUser && currentUser.role === 'parent' ? {
        parentName: currentUser.name,
        parentEmail: currentUser.email,
        parentPhone: currentUser.phone
      } : null,
      submissionDate: moment().format('DD/MM/YYYY HH:mm')
    };
    
    console.log("Submitted health profile:", submissionData);
    alert(`Lưu hồ sơ sức khỏe ${selectedChild ? `cho ${selectedChild.name}` : ''} thành công!`);
    // TODO: Integrate API call to save profile
  };

  return (
    <Container>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 30, color: '#096dd9' }}>Quản lý hồ sơ sức khỏe học sinh</Title>

      <Form
        form={form}
        layout="vertical"
        onValuesChange={handleChange}
        onFinish={handleSubmit}
        initialValues={{
          ...initialProfile,
          // Convert date strings to moment objects for initial values if necessary
          dob: initialProfile.dob ? moment(initialProfile.dob) : null,
        }}
      >        <StyledCard title="Thông tin cơ bản" extra={<MedicineBoxOutlined style={{ color: '#1890ff' }} />}>
          {/* Hiển thị thông tin phụ huynh nếu đăng nhập với tài khoản phụ huynh */}
          {isLoggedIn && currentUser && currentUser.role === 'parent' && (
            <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: '6px' }}>
              <strong>Phụ huynh:</strong> {currentUser.name} | <strong>Email:</strong> {currentUser.email}
            </div>
          )}
          
          <Row gutter={[24, 16]}>
            <Col xs={24} sm={24} md={12}>
              {/* Nếu là phụ huynh thì hiển thị dropdown chọn con, nếu không thì hiển thị input */}
              {isLoggedIn && currentUser && currentUser.role === 'parent' ? (
                <Form.Item
                  name="studentId"
                  label="Chọn học sinh"
                  rules={[{ required: true, message: 'Vui lòng chọn học sinh!' }]}
                >
                  <Select 
                    placeholder="Chọn con em của bạn"
                    onChange={handleChildSelect}
                    style={{ width: '100%' }}
                  >
                    {children.map(child => (
                      <Option key={child.studentId} value={child.studentId}>
                        {child.name} - {child.class} (Mã: {child.studentId})
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              ) : (
                <Form.Item
                  name="fullName"
                  label="Họ và tên"
                  rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                >
                  <Input placeholder="Nhập họ và tên" />
                </Form.Item>
              )}
              
              {/* Hiển thị trường họ và tên chỉ đọc nếu là phụ huynh và đã chọn con */}
              {isLoggedIn && currentUser && currentUser.role === 'parent' && selectedChild && (
                <Form.Item
                  name="fullName"
                  label="Họ và tên"
                >
                  <Input 
                    disabled
                    style={{ backgroundColor: '#f5f5f5' }}
                    value={selectedChild.name}
                  />
                </Form.Item>
              )}
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="dob"
                label="Ngày sinh"
              >
                <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" placeholder="Chọn ngày sinh" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="vision"
                label={<Space><EyeOutlined /> Thị lực</Space>}
              >
                <Input placeholder="Ví dụ: 10/10" />
              </Form.Item>
            </Col>
             <Col xs={24} sm={12}>
              <Form.Item
                name="hearing"
                 label={<Space><SoundOutlined /> Thính lực</Space>}
              >
                <Input placeholder="Ví dụ: Bình thường" />
              </Form.Item>
            </Col>
             <Col span={24}>
              <Form.Item
                name="allergies"
                label={<Space><MedicineBoxOutlined /> Dị ứng</Space>}
              >
                <TextArea rows={2} placeholder="Ví dụ: Phấn hoa, hải sản..." />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="chronicDiseases"
                 label={<Space><HeartOutlined /> Bệnh mãn tính</Space>}
              >
                <TextArea rows={2} placeholder="Ví dụ: Tiểu đường, hen suyễn..." />
              </Form.Item>
            </Col>
          </Row>
        </StyledCard>

        <StyledCard title="Tiêm chủng" extra={<SafetyOutlined style={{ color: '#52c41a' }} />}>
          <List
            itemLayout="horizontal"
            dataSource={profile.vaccinations}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                   <Popconfirm
                    title="Bạn có chắc chắn muốn xóa mũi tiêm này?"
                    onConfirm={() => removeVaccination(index)}
                    okText="Có"
                    cancelText="Không"
                    key="delete"
                  >
                    <Tooltip title="Xóa mũi tiêm"><Button type="text" danger icon={<DeleteOutlined />} size="small" /></Tooltip>
                  </Popconfirm>
                ]}
              >
                <ListItemContent direction="vertical" size="small" style={{ width: '100%' }}>
                   <Input 
                      placeholder="Tên vaccine" 
                      value={item.vaccine}
                      onChange={(e) => handleVaccinationChange(index, 'vaccine', e.target.value)}
                    />
                   <Space size="small">
                     <DatePicker 
                        placeholder="Ngày tiêm" 
                        value={item.date ? moment(item.date) : null}
                        onChange={(date) => handleVaccinationChange(index, 'date', date)}
                        style={{ width: 150 }}
                        format="YYYY-MM-DD"
                      />
                       <Select
                          placeholder="Trạng thái"
                          value={item.status}
                          onChange={(value) => handleVaccinationChange(index, 'status', value)}
                          style={{ width: 120 }}
                        >
                          {vaccinationStatuses.map(status => <Option key={status} value={status}>{status}</Option>)}
                        </Select>
                   </Space>
                </ListItemContent>
              </List.Item>
            )}
          />
          <StyledButton type="dashed" onClick={addVaccination} block icon={<PlusOutlined />}>Thêm mũi tiêm</StyledButton>
        </StyledCard>

        <StyledCard title="Kiểm tra sức khỏe định kỳ" extra={<HeartOutlined style={{ color: '#eb2f96' }} />}>
           <List
            itemLayout="horizontal"
            dataSource={profile.healthChecks}
            renderItem={(item, index) => (
              <List.Item
                 actions={[
                   <Popconfirm
                    title="Bạn có chắc chắn muốn xóa kết quả kiểm tra này?"
                    onConfirm={() => removeHealthCheck(index)}
                    okText="Có"
                    cancelText="Không"
                    key="delete"
                  >
                    <Tooltip title="Xóa kết quả"><Button type="text" danger icon={<DeleteOutlined />} size="small" /></Tooltip>
                  </Popconfirm>
                ]}
              >
                 <ListItemContent direction="vertical" size="small" style={{ width: '100%' }}>
                    <DatePicker 
                      placeholder="Ngày kiểm tra" 
                      value={item.date ? moment(item.date) : null}
                      onChange={(date) => handleHealthCheckChange(index, 'date', date)}
                      style={{ width: 150 }}
                       format="YYYY-MM-DD"
                    />
                    <Select
                        placeholder="Kết quả"
                        value={item.result}
                        onChange={(value) => handleHealthCheckChange(index, 'result', value)}
                        style={{ width: 150 }}
                      >
                        {healthCheckResults.map(result => <Option key={result} value={result}>{result}</Option>)}
                      </Select>
                 </ListItemContent>
              </List.Item>
            )}
          />
          <StyledButton type="dashed" onClick={addHealthCheck} block icon={<PlusOutlined />}>Thêm kết quả kiểm tra</StyledButton>
        </StyledCard>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Lưu hồ sơ
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default StudentProfile;
