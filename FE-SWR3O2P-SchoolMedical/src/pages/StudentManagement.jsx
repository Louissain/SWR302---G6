import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Popconfirm, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title } = Typography;

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #e6f7ff !important;
    font-weight: bold;
  }
`;

// Dữ liệu mẫu
const initialStudents = [
  {
    id: '1',
    fullName: 'Nguyễn Văn A',
    dob: '2008-09-01',
    allergies: 'Phấn hoa',
    chronicDiseases: 'Không',
    vision: 'Bình thường',
    hearing: 'Bình thường',
    vaccinations: [{ vaccineName: 'Sởi', date: '2023-10-15', status: 'Đã tiêm' }],
    healthChecks: [{ date: '2024-05-20', result: 'Bình thường' }],
  },
  {
    id: '2',
    fullName: 'Trần Thị B',
    dob: '2009-03-10',
    allergies: 'Không',
    chronicDiseases: 'Hen suyễn',
    vision: 'Cận thị',
    hearing: 'Bình thường',
    vaccinations: [],
    healthChecks: [{ date: '2024-05-21', result: 'Cần theo dõi thêm' }],
  },
];

const StudentManagement = () => {
  const [students, setStudents] = useState(initialStudents);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Họ và tên',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dob',
      key: 'dob',
      sorter: (a, b) => new Date(a.dob) - new Date(b.dob),
    },
    {
      title: 'Dị ứng',
      dataIndex: 'allergies',
      key: 'allergies',
    },
    {
      title: 'Bệnh mãn tính',
      dataIndex: 'chronicDiseases',
      key: 'chronicDiseases',
    },
    {
      title: 'Thị lực',
      dataIndex: 'vision',
      key: 'vision',
    },
    {
      title: 'Thính lực',
      dataIndex: 'hearing',
      key: 'hearing',
    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_, record) => (
        <Space size="small">
          <Button icon={<EyeOutlined />} tooltip="Xem hồ sơ sức khỏe" /> {/* TODO: Link to Health Record page */}
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} tooltip="Chỉnh sửa" />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => handleDelete(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button icon={<DeleteOutlined />} danger tooltip="Xóa" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    setEditingStudent(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingStudent(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
    // TODO: Add actual delete logic (API call)
  };

  const handleModalOk = () => {
    form.validateFields()
      .then(values => {
        if (editingStudent) {
          // Update existing student
          setStudents(students.map(student =>
            student.id === editingStudent.id ? { ...student, ...values } : student
          ));
          // TODO: Add actual update logic (API call)
        } else {
          // Add new student
          const newStudent = { ...values, id: Date.now().toString() }; // Simple ID generation
          setStudents([...students, newStudent]);
          // TODO: Add actual create logic (API call)
        }
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="p-6" style={{ maxWidth: 1200, margin: 'auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>Quản lý Sinh viên</Title>
      
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>Thêm Sinh viên mới</Button>
      </div>

      <StyledTable 
        dataSource={students}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={editingStudent ? 'Chỉnh sửa thông tin sinh viên' : 'Thêm sinh viên mới'}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        destroyOnClose={true}
      >
        <Form
          form={form}
          layout="vertical"
          name="student_form"
          initialValues={editingStudent || {}}
        >
          <Form.Item
            name="fullName"
            label="Họ và tên"
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Ngày sinh"
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            name="allergies"
            label="Dị ứng"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="chronicDiseases"
            label="Bệnh mãn tính"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="vision"
            label="Thị lực"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="hearing"
            label="Thính lực"
          >
            <Input />
          </Form.Item>
          {/* TODO: Add fields for vaccinations and healthChecks if needed in the form */}
        </Form>
      </Modal>
    </div>
  );
};

export default StudentManagement;