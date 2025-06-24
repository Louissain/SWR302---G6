import { Link } from "react-router-dom";
import { Card, Typography, Space, Button, Avatar, Tooltip, Row, Col, Tag, Rate, Badge, Divider } from "antd";
import { 
  CalendarOutlined, 
  UserOutlined, 
  EyeOutlined, 
  LikeOutlined, 
  MessageOutlined, 
  ShareAltOutlined, 
  BookOutlined, 
  HeartOutlined 
} from "@ant-design/icons";
import { fullBlogPosts } from '../data/blogPosts';

const { Title, Text } = Typography;

export default function BlogList() {
  return (
    <Row gutter={[24, 24]} justify="center">
      {fullBlogPosts.map(post => (
        <Col xs={24} sm={12} lg={8} key={post.id}>
          <Link to={`/blog/${post.id}`}>
            <Card
              hoverable
              className="h-full rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              cover={
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                  <img
                    alt={post.title}
                    src={post.imageUrl}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <Badge
                    count={post.views}
                    className="absolute top-4 right-4"
                    style={{ backgroundColor: '#4a90e2', padding: '4px 10px', borderRadius: '999px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                    title="Lượt xem"
                  >
                    <EyeOutlined className="text-white text-lg" />
                  </Badge>
                </div>
              }
            >
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <Tooltip title={post.category}>
                    <Tag color="blue" className="text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                      {post.category}
                    </Tag>
                  </Tooltip>
                  <Space className="text-gray-500 text-sm">
                    <CalendarOutlined />
                    <span>{post.date}</span>
                  </Space>
                </div>
                <Title level={4} className="text-xl sm:text-2xl font-bold mb-3 line-clamp-2 text-gray-800 leading-snug">
                  {post.title}
                </Title>
                <Text className="text-gray-600 block mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </Text>
                <div className="flex items-center justify-between flex-wrap gap-2 border-t pt-4 border-gray-100">
                  <div className="flex items-center text-gray-700 text-base">
                    <Avatar size="small" icon={<UserOutlined />} className="mr-2 bg-blue-100 text-blue-600" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Rate disabled defaultValue={post.rating} allowHalf className="text-yellow-500 text-lg" />
                    <span className="text-gray-600 text-sm">({post.rating})</span>
                  </div>
                </div>
                <Divider className="my-4" />
                <Space size="large" className="w-full justify-between flex-wrap">
                  <Button type="text" icon={<LikeOutlined />} className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                    {post.likes}
                  </Button>
                  <Button type="text" icon={<MessageOutlined />} className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                    {post.comments}
                  </Button>
                  <Tooltip title="Thời gian đọc">
                    <Button type="text" icon={<BookOutlined />} className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                      {post.readTime}
                    </Button>
                  </Tooltip>
                </Space>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Tag key={index} color="blue" className="text-sm px-3 py-1 rounded-full">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
