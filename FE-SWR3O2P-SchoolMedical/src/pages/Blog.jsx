import { useParams } from 'react-router-dom';
import { Card, Typography, Divider, Space, Button, Tag, Row, Col, Input, Rate, Avatar, Tooltip, Badge } from 'antd';
import { 
  ArrowLeftOutlined, 
  SearchOutlined, 
  CalendarOutlined, 
  UserOutlined, 
  TagOutlined,
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
  EyeOutlined,
  BookOutlined,
  HeartOutlined,
  StarOutlined
} from '@ant-design/icons';
import BlogList from '../components/BlogList';
import { blogCategories, featuredPosts, fullBlogPosts } from '../data/blogPosts';

const { Title, Text, Paragraph } = Typography;
const { Search } = Input;

export default function Blog() {
  const { id } = useParams();

  if (id) {
    const post = fullBlogPosts.find(post => post.id === id);
    if (!post) return <div className="p-8 text-center text-gray-600">Không tìm thấy bài viết</div>;

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Button 
          icon={<ArrowLeftOutlined />} 
          onClick={() => window.history.back()}
          className="mb-6 hover:bg-blue-50"
        >
          Quay lại
        </Button>
        
        <Card className="shadow-lg rounded-lg overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Tag color="blue">{post.category}</Tag>
              <span className="text-gray-500">
                <CalendarOutlined className="mr-2" />
                {post.date}
              </span>
              <span className="text-gray-500">
                <UserOutlined className="mr-2" />
                {post.author}
              </span>
              <span className="text-gray-500">
                <EyeOutlined className="mr-2" />
                {post.views} lượt xem
              </span>
              <span className="text-gray-500">
                <BookOutlined className="mr-2" />
                {post.readTime}
              </span>
            </div>

            <Title level={2} className="text-3xl font-bold mb-4 text-gray-800">
              {post.title}
            </Title>

            <div className="flex items-center gap-4 mb-6">
              <Rate disabled defaultValue={post.rating} allowHalf />
              <span className="text-gray-500">({post.rating})</span>
              <div className="flex items-center gap-2">
                <Button type="text" icon={<LikeOutlined />}>
                  {post.likes}
                </Button>
                <Button type="text" icon={<MessageOutlined />}>
                  {post.comments}
                </Button>
                <Button type="text" icon={<ShareAltOutlined />} />
                <Button type="text" icon={<HeartOutlined />} />
              </div>
            </div>
            
            <Divider className="my-6" />
            
            <div className="prose prose-lg max-w-none">
              {post.content.map((item, index) => {
                if (item.type === 'paragraph') {
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  );
                }
                if (item.type === 'heading') {
                  return (
                    <h4 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                      {item.text}
                    </h4>
                  );
                }
                if (item.type === 'list') {
              return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                      {item.items.map((listItem, listIndex) => (
                        <li key={listIndex} className="text-gray-700 mb-2">
                          {listItem}
                        </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
            </div>

            <Divider className="my-8" />

            <div className="mb-8">
              <Title level={4} className="text-xl font-bold mb-4">
                Tags
              </Title>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Tag key={index} color="blue">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            {post.relatedPosts && (
              <div>
                <Title level={4} className="text-xl font-bold mb-4">
                  Bài viết liên quan
                </Title>
                <Row gutter={[16, 16]}>
                  {post.relatedPosts.map(relatedPost => (
                    <Col span={12} key={relatedPost.id}>
                      <Card hoverable>
                        <Title level={5} className="text-lg font-semibold">
                          {relatedPost.title}
                        </Title>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 font-sans bg-gray-50 min-h-screen">
      <div className="text-center mb-16 pt-4 sm:pt-8 lg:pt-12">
        <Title level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight drop-shadow-sm">
          Blog Sức khỏe Học đường
        </Title>
        <Text className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto block leading-relaxed px-4">
          Cập nhật thông tin, kiến thức và hướng dẫn chuyên sâu về chăm sóc sức khỏe toàn diện cho học sinh.
        </Text>
      </div>

      {/* Search and Categories Section */}
      <div className="mb-16 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="flex flex-col gap-6">
          <Search
            placeholder="Tìm kiếm bài viết, ví dụ: Dinh dưỡng, tâm lý học..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            className="w-full rounded-lg overflow-hidden"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map(category => (
              <Tooltip key={category.id} title={category.description}>
                <Tag
                  color={category.color}
                  className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out text-base px-4 py-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <Space>
                    {category.icon}
                    <span>{category.name}</span>
                  </Space>
                </Tag>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="mb-16">
        <Title level={3} className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800 text-center">
          Bài viết nổi bật
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {featuredPosts.map(post => (
            <Col xs={24} sm={12} lg={8} key={post.id}>
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
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
