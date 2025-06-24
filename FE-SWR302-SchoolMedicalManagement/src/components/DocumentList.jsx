import { List, Card, Typography, Space } from "antd";
import styled from "styled-components";
import { FileTextOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const docs = [
  { id: 1, title: "Hướng dẫn phòng chống dịch bệnh", link: "#" },
  { id: 2, title: "Chăm sóc sức khỏe tâm thần cho học sinh", link: "#" },
  { id: 3, title: "Chế độ dinh dưỡng cho học sinh", link: "#" },
  { id: 4, title: "Hướng dẫn tiêm chủng đầy đủ", link: "#" },
  { id: 5, title: "Cẩm nang sức khỏe học đường", link: "#" },
  { id: 6, title: "Tài liệu về bệnh thường gặp ở trẻ em", link: "#" },
  { id: 7, title: "Hướng dẫn sơ cứu cơ bản", link: "#" },
  { id: 8, title: "Chính sách bảo vệ sức khỏe học sinh", link: "#" },
];

const StyledListItem = styled(List.Item)`
  margin-bottom: 16px !important;
`;

const StyledCard = styled(Card)`
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

const DocumentLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #1890ff;
  }
`;

export default function DocumentList() {
  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <List
        itemLayout="vertical"
        dataSource={docs}
        renderItem={(item) => (
          <StyledListItem key={item.id}>
            <StyledCard>
              <DocumentLink href={item.link} target="_blank" rel="noopener noreferrer">
                <Space>
                  <FileTextOutlined style={{ fontSize: '20px', color: '#1890ff' }} />
                  <Text strong>{item.title}</Text>
                </Space>
              </DocumentLink>
            </StyledCard>
          </StyledListItem>
        )}
      />
    </div>
  );
}
