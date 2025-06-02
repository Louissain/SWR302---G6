import { Link } from "react-router-dom";
import { List, Card, Typography, Space, Button } from "antd";
import styled from "styled-components";
import { ReadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const posts = [
  {
    id: 1,
    title: "5 cách phòng tránh bệnh học đường",
    blog: [
      "Cách 1 : Rửa tay thường xuyên",
      "Cách 2 : Giữ gìn vệ sinh cá nhân",
      "Cách 3: Không dùng chung đồ dùng cá nhân",
      "Cách 4 : Không ăn uống ở nơi đông người",
    ],
    excerpt: "Bí quyết giữ gìn sức khỏe cho học sinh...",
    // imageUrl: "https://via.placeholder.com/400x200"
  },
  {
    id: 2,
    title: "Dinh dưỡng hợp lý cho trẻ",
    excerpt: "Thực đơn cân đối cho học sinh các cấp...",
    // imageUrl: "https://via.placeholder.com/400x200"
  },
];

const StyledListItem = styled(List.Item)`
  margin-bottom: 32px !important; // Increased bottom margin
`;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); // More prominent shadow
  border-radius: 10px; // Slightly larger border radius
  width: 100%;
  transition: all 0.3s ease; // Smooth transition
  overflow: hidden; // Ensure border radius is applied to image

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); // Darker shadow on hover
    transform: translateY(-4px); // Lift card slightly on hover
  }

  .ant-card-body {
    padding: 24px; // Increased padding inside card
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px; // Fixed height for images
  object-fit: cover; // Cover the area without distorting aspect ratio
  margin-bottom: 16px; // Space below image
  border-radius: 8px 8px 0 0; // Top border radius
`;

const ExcerptText = styled(Text)`
  display: block;
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.75); // Slightly darker text color
  line-height: 1.6; // Improved readability
`;

const ReadMoreButton = styled(Button)`
  margin-top: 20px; // More space above button
  border-radius: 20px; // Rounded button
`;

function BlogList() {
  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 40, color: '#096dd9' }}>Blog Sức Khỏe Học Đường</Title>
      <List
        itemLayout="vertical"
        dataSource={posts}
        renderItem={(item) => (
          <StyledListItem key={item.id}>
            <StyledCard>
              {item.imageUrl && <BlogImage src={item.imageUrl} alt={item.title} />}
              <List.Item.Meta
                avatar={<ReadOutlined style={{ fontSize: '28px', color: '#1890ff' }} />}
                title={<Title level={4} style={{ marginBottom: 8 }}>{item.title}</Title>} // Added margin below title
              />
              {item.blog && item.blog.length > 0 && (
                <Space direction="vertical" style={{ width: '100%', marginBottom: 12 }}> {/* Use Space for points */}
                  {item.blog.map((point, index) => (
                    <Text key={index}><ReadOutlined style={{ marginRight: 8, color: '#52c41a' }} />{point}</Text> // Added icon to points
                  ))}
                </Space>
              )}
              <ExcerptText>{item.excerpt}</ExcerptText>
              <ReadMoreButton type="primary" ghost size="small">
                <Link to={`/blog/${item.id}`}>Đọc tiếp</Link>
              </ReadMoreButton>
            </StyledCard>
          </StyledListItem>
        )}
      />
    </div>
  );
}

export default BlogList;
