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
import styled from "styled-components";

const { Title, Text } = Typography;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  padding: 24px 0;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border-radius: 8px 8px 0 0;
  margin: -24px -24px 24px -24px;
  color: white;
`;

const IconWrapper = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  color: white;
`;

const StatusTag = styled(Tag)`
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
`;

function StudentHealthRecord({ student }) {
  if (!student) {
    return (
      <StyledCard style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
        <Text type="secondary">Vui lòng chọn học sinh để xem hồ sơ sức khỏe.</Text>
      </StyledCard>
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

  const basicInfoColumns = [
    {
      title: "Thông tin",
      dataIndex: "label",
      key: "label",
      width: "30%",
    },
    {
      title: "Chi tiết",
      dataIndex: "value",
      key: "value",
    },
  ];

  const basicInfoData = [
    {
      key: "1",
      label: <Space><CalendarOutlined /> Ngày sinh</Space>,
      value: dob || "Chưa cập nhật",
    },
    {
      key: "2",
      label: <Space><MedicineBoxOutlined /> Dị ứng</Space>,
      value: allergies ? <StatusTag color="red" icon={<WarningOutlined />}>{allergies}</StatusTag> : "Không có",
    },
    {
      key: "3",
      label: <Space><MedicineBoxOutlined /> Bệnh mãn tính</Space>,
      value: chronicDiseases ? <StatusTag color="orange" icon={<WarningOutlined />}>{chronicDiseases}</StatusTag> : "Không có",
    },
    {
      key: "4",
      label: <Space><EyeOutlined /> Thị lực</Space>,
      value: vision || "Chưa cập nhật",
    },
    {
      key: "5",
      label: <Space><SoundOutlined /> Thính lực</Space>,
      value: hearing || "Chưa cập nhật",
    },
  ];

  const vaccinationColumns = [
    {
      title: "Tên vaccine",
      dataIndex: "vaccineName",
      key: "vaccineName",
    },
    {
      title: "Ngày tiêm",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <StatusTag 
          color={status === "Đã tiêm" ? "green" : "orange"}
          icon={status === "Đã tiêm" ? <CheckCircleOutlined /> : <ClockCircleOutlined />}
        >
          {status || "Chưa cập nhật"}
        </StatusTag>
      ),
    },
  ];

  const healthCheckColumns = [
    {
      title: "Ngày kiểm tra",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Kết quả",
      dataIndex: "result",
      key: "result",
      render: (result) => (
        <StatusTag 
          color={result === "Bình thường" ? "green" : "orange"}
          icon={result === "Bình thường" ? <CheckCircleOutlined /> : <WarningOutlined />}
        >
          {result || "Chưa cập nhật"}
        </StatusTag>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <StyledCard>
        <HeaderSection>
          <IconWrapper>
            <UserOutlined />
          </IconWrapper>
          <Title level={2} style={{ color: "white", margin: 0 }}>{fullName}</Title>
        </HeaderSection>

        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <StyledCard>
                <Statistic
                  title="Tỷ lệ tiêm chủng"
                  value={vaccinationRate}
                  precision={1}
                  suffix="%"
                  prefix={<SafetyOutlined />}
                />
                <Progress percent={vaccinationRate} status="active" />
              </StyledCard>
            </Col>
            <Col span={12}>
              <StyledCard>
                <Statistic
                  title="Tỷ lệ sức khỏe tốt"
                  value={healthCheckRate}
                  precision={1}
                  suffix="%"
                  prefix={<HeartOutlined />}
                />
                <Progress percent={healthCheckRate} status="active" />
              </StyledCard>
            </Col>
          </Row>

          <StyledCard title="Thông tin cơ bản" bordered={false}>
            <Table
              columns={basicInfoColumns}
              dataSource={basicInfoData}
              pagination={false}
              showHeader={false}
            />
          </StyledCard>

          <StyledCard 
            title={
              <Space>
                <SafetyOutlined />
                Tiêm chủng
              </Space>
            } 
            bordered={false}
          >
            {vaccinations.length === 0 ? (
              <Text type="secondary">Chưa có dữ liệu tiêm chủng.</Text>
            ) : (
              <Table
                columns={vaccinationColumns}
                dataSource={vaccinations.map((vac, idx) => ({
                  ...vac,
                  key: idx,
                  vaccineName: vac.vaccineName || vac.vaccine || "Chưa cập nhật",
                }))}
                pagination={false}
              />
            )}
          </StyledCard>

          <StyledCard 
            title={
              <Space>
                <HeartOutlined />
                Kiểm tra sức khỏe định kỳ
              </Space>
            } 
            bordered={false}
          >
            {healthChecks.length === 0 ? (
              <Text type="secondary">Chưa có dữ liệu kiểm tra sức khỏe.</Text>
            ) : (
              <Table
                columns={healthCheckColumns}
                dataSource={healthChecks.map((check, idx) => ({
                  ...check,
                  key: idx,
                }))}
                pagination={false}
              />
            )}
          </StyledCard>
        </Space>
      </StyledCard>
    </div>
  );
}

export default StudentHealthRecord;
