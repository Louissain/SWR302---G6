// src/components/student/StudentHealthRecord.jsx
import React from "react";
import { Card, Typography, Table, Space, Tag, Row, Col, Statistic, Progress, Divider } from "antd";
import { 
  UserOutlined, 
  CalendarOutlined, 
  MedicineBoxOutlined, 
  EyeOutlined, 
  SoundOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  SafetyOutlined
} from "@ant-design/icons";

const { Title, Text } = Typography;

function StudentHealthRecord({ student }) {
  if (!student) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="shadow-lg rounded-lg">
          <div className="text-center text-gray-500 py-8">
            <UserOutlined className="text-4xl mb-4" />
            <p>Vui lòng chọn học sinh để xem hồ sơ sức khỏe.</p>
          </div>
        </Card>
      </div>
    );
  }

  const {
    fullName,
    dob,
    allergies,
    chronicDiseases,
    vision,
    hearing,
    vaccinations = [],
    healthChecks = [],
  } = student;

  // Calculate health metrics
  const vaccinationRate = vaccinations.length > 0 
    ? (vaccinations.filter(v => v.status === "Đã tiêm").length / vaccinations.length) * 100 
    : 0;
  
  const healthCheckRate = healthChecks.length > 0
    ? (healthChecks.filter(h => h.result === "Bình thường").length / healthChecks.length) * 100
    : 0;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <Title level={2} className="text-white mb-2">{fullName}</Title>
              <div className="flex items-center space-x-4 text-blue-100">
                <span className="flex items-center">
                  <CalendarOutlined className="mr-2" />
                  {dob}
                </span>
                <span className="flex items-center">
                  <UserOutlined className="mr-2" />
                  Học sinh
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{vaccinationRate.toFixed(0)}%</div>
              <div className="text-blue-100">Tỷ lệ tiêm chủng</div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Row gutter={[24, 24]} className="mb-8">
            <Col span={12}>
              <Card className="h-full">
                <Statistic
                  title="Tình trạng sức khỏe"
                  value={healthCheckRate}
                  suffix="%"
                  valueStyle={{ color: healthCheckRate >= 80 ? '#3f8600' : '#cf1322' }}
                  prefix={healthCheckRate >= 80 ? <CheckCircleOutlined /> : <WarningOutlined />}
                />
                <Progress percent={healthCheckRate} status={healthCheckRate >= 80 ? "success" : "exception"} />
              </Card>
            </Col>
            <Col span={12}>
              <Card className="h-full">
                <Statistic
                  title="Tiêm chủng"
                  value={vaccinationRate}
                  suffix="%"
                  valueStyle={{ color: vaccinationRate >= 80 ? '#3f8600' : '#cf1322' }}
                  prefix={vaccinationRate >= 80 ? <CheckCircleOutlined /> : <WarningOutlined />}
                />
                <Progress percent={vaccinationRate} status={vaccinationRate >= 80 ? "success" : "exception"} />
              </Card>
            </Col>
          </Row>

          <Space direction="vertical" size="large" className="w-full">
            <Card title={
              <div className="flex items-center text-lg font-semibold">
                <MedicineBoxOutlined className="mr-2" />
                Thông tin sức khỏe cơ bản
              </div>
            }>
              <Table
                columns={[
                  { title: 'Chỉ số', dataIndex: 'name', key: 'name' },
                  { title: 'Giá trị', dataIndex: 'value', key: 'value' },
                ]}
                dataSource={[
                  { key: '1', name: 'Thị lực', value: vision || 'Chưa cập nhật' },
                  { key: '2', name: 'Thính lực', value: hearing || 'Chưa cập nhật' },
                  { key: '3', name: 'Dị ứng', value: allergies?.join(', ') || 'Không có' },
                  { key: '4', name: 'Bệnh mãn tính', value: chronicDiseases?.join(', ') || 'Không có' },
                ]}
                pagination={false}
                className="w-full"
              />
            </Card>

            <Card title={
              <div className="flex items-center text-lg font-semibold">
                <SafetyOutlined className="mr-2" />
                Lịch sử tiêm chủng
              </div>
            }>
              {vaccinations.length === 0 ? (
                <div className="text-center text-gray-500 py-4">
                  Chưa có dữ liệu tiêm chủng
                </div>
              ) : (
                <Table
                  columns={[
                    { title: 'Vaccine', dataIndex: 'vaccineName', key: 'vaccineName' },
                    { title: 'Ngày tiêm', dataIndex: 'date', key: 'date' },
                    { title: 'Trạng thái', dataIndex: 'status', key: 'status',
                      render: (status) => (
                        <Tag color={status === 'Đã tiêm' ? 'success' : 'warning'}>
                          {status}
                        </Tag>
                      )
                    },
                  ]}
                  dataSource={vaccinations}
                  pagination={false}
                />
              )}
            </Card>

            <Card title={
              <div className="flex items-center text-lg font-semibold">
                <HeartOutlined className="mr-2" />
                Lịch sử khám sức khỏe
              </div>
            }>
              {healthChecks.length === 0 ? (
                <div className="text-center text-gray-500 py-4">
                  Chưa có dữ liệu khám sức khỏe
                </div>
              ) : (
                <Table
                  columns={[
                    { title: 'Ngày khám', dataIndex: 'date', key: 'date' },
                    { title: 'Kết quả', dataIndex: 'result', key: 'result',
                      render: (result) => (
                        <Tag color={result === 'Bình thường' ? 'success' : 'warning'}>
                          {result}
                        </Tag>
                      )
                    },
                    { title: 'Ghi chú', dataIndex: 'notes', key: 'notes' },
                  ]}
                  dataSource={healthChecks}
                  pagination={false}
                />
              )}
            </Card>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default StudentHealthRecord;
