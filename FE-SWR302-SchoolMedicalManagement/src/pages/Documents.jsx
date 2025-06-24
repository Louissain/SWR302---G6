import { Card, Typography, Row, Col, Tag, Space, Button, Input, Tooltip, Divider } from 'antd';
import { 
  SearchOutlined, 
  DownloadOutlined, 
  EyeOutlined, 
  FilePdfOutlined,
  CalendarOutlined,
  UserOutlined,
  TagOutlined
} from '@ant-design/icons';
import { educationalDocuments } from '../data/blogPosts';

const { Title, Text } = Typography;
const { Search } = Input;

export default function Documents() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 font-sans bg-gray-50 min-h-screen">
      <div className="text-center mb-16 pt-4 sm:pt-8 lg:pt-12">
        <Title level={1} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight drop-shadow-sm">
          Tài liệu Sức khỏe Học đường
        </Title>
        <Text className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto block leading-relaxed px-4">
          Tổng hợp các tài liệu, hướng dẫn và quy định chuyên sâu về công tác y tế học đường, hỗ trợ toàn diện cho học sinh và phụ huynh.
        </Text>
      </div>

      {/* Search and Filters Section */}
      <div className="mb-16 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
        <Row gutter={[24, 24]} align="middle" justify="center">
          <Col xs={24} md={16} lg={14}>
            <Search
              placeholder="Tìm kiếm tài liệu, ví dụ: Sơ cứu, dinh dưỡng..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              className="w-full rounded-lg overflow-hidden"
            />
          </Col>
          <Col xs={24} md={8} lg={10}>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end mt-4 md:mt-0">
              {['PDF', 'DOC', 'PPT', 'XLS'].map(type => (
                <Tag
                  key={type}
                  color="blue"
                  className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out text-base px-4 py-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <Space>
                    <FilePdfOutlined />
                    <span>{type}</span>
                  </Space>
                </Tag>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      {/* Documents Grid */}
      <Row gutter={[24, 24]} justify="center">
        {educationalDocuments.map(doc => (
          <Col xs={24} sm={12} lg={8} key={doc.id}>
            <Card
              hoverable
              className="h-full rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              cover={
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                  <img
                    alt={doc.title}
                    src={doc.imageUrl}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-sm">
                    <FilePdfOutlined className="text-blue-600" />
                    {doc.fileType}
                  </div>
                </div>
              }
            >
              <div className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <Tag color="blue" className="text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                    {doc.category}
                  </Tag>
                  <Space className="text-gray-500 text-sm">
                    <CalendarOutlined />
                    <span>{doc.date}</span>
                  </Space>
                </div>

                <Title level={4} className="text-xl sm:text-2xl font-bold mb-3 line-clamp-2 text-gray-800 leading-snug">
                  {doc.title}
                </Title>

                <Text className="text-gray-600 block mb-4 line-clamp-3 leading-relaxed">
                  {doc.description}
                </Text>

                <div className="flex items-center justify-between flex-wrap gap-2 border-t pt-4 border-gray-100">
                  <div className="flex items-center text-gray-700 text-base">
                    <UserOutlined className="mr-2" />
                    <span>{doc.author}</span>
                  </div>
                  <Text type="secondary" className="text-base font-semibold text-gray-600">
                    {doc.fileSize}
                  </Text>
                </div>

                <Divider className="my-4" />

                <Space size="large" className="w-full justify-between flex-wrap">
                  <Tooltip title="Lượt xem">
                    <Button type="text" icon={<EyeOutlined />} className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                      {doc.views}
                    </Button>
                  </Tooltip>
                  <Tooltip title="Lượt tải">
                    <Button type="text" icon={<DownloadOutlined />} className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                      {doc.downloads}
                    </Button>
                  </Tooltip>
                  <Button type="primary" icon={<DownloadOutlined />} className="ml-auto bg-blue-500 hover:bg-blue-600 border-none rounded-full px-5 py-2">
                    Tải xuống
                  </Button>
                </Space>

                <div className="mt-4 flex flex-wrap gap-2">
                  {doc.tags.map((tag, index) => (
                    <Tag key={index} color="blue" className="text-sm px-3 py-1 rounded-full">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
